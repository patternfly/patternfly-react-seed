import { ExpenseList } from '@app/model/ExpenseList';
import { Table, Tbody, Td, Th, ThProps, Thead, Tr } from '@patternfly/react-table';
import { QueryStatus } from '@tanstack/react-query';
import React from 'react';
import { ExpensesTableSkeleton } from './ExpensesTableSkeleton';
import { Pagination, PaginationVariant } from '@patternfly/react-core';
import { PaginationType } from '@app/queries/PaginationType';
import { Expense } from '@app/model/Expense';

type ExpensesTableProps = {
  expenses?: Expense[];
  total?: number;
  status: QueryStatus;
  pagination: PaginationType;
  paginaChangeCallback?: (pagination: PaginationType) => void;
};

const ExpensesTable = ({ expenses, total, status, pagination, paginaChangeCallback }: ExpensesTableProps) => {
  const [activeSortIndex, setActiveSortIndex] = React.useState<number>();
  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc'>();
  const [paginationState, setPaginationState] = React.useState<PaginationType>(pagination);

  const onSetPage = (_event: React.MouseEvent | React.KeyboardEvent | MouseEvent, page: number) => {
    setPaginationState({ ...paginationState, page });
  };

  const onPerPageSelect = (_event: React.MouseEvent | React.KeyboardEvent | MouseEvent, size: number, page: number) => {
    setPaginationState({ ...paginationState, page, size });
  };

  React.useEffect(() => {
    if (paginaChangeCallback && JSON.stringify(pagination) !== JSON.stringify(paginationState)) {
      paginaChangeCallback(paginationState);
    }
    // avoid reaction on pagination
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationState, paginaChangeCallback]);

  React.useEffect(() => {
    setPaginationState(pagination);
  }, [pagination, setPaginationState]);

  const getSortParams = (columnIndex: number): ThProps['sort'] => ({
    sortBy: {
      index: activeSortIndex,
      direction: activeSortDirection,
    },
    onSort: (_event, index, direction) => {
      setActiveSortIndex(index);
      setActiveSortDirection(direction as 'desc' | 'asc');
    },
    columnIndex,
  });

  switch (status) {
    case 'pending':
      return <ExpensesTableSkeleton />;
    case 'error':
      return <p>Error</p>;
    default:
      return (
        <>
          <Table aria-label="Sortable table custom toolbar">
            <Thead>
              <Tr>
                <Th sort={getSortParams(0)}>Fecha</Th>
                <Th sort={getSortParams(1)}>Concepto</Th>
                <Th sort={getSortParams(2)}>Importe</Th>
                <Th sort={getSortParams(3)}>Categoría</Th>
              </Tr>
            </Thead>
            <Tbody>
              {expenses?.map((expense, rowIndex) => (
                <Tr key={rowIndex}>
                  <Td>{expense.date}</Td>
                  <Td>{expense.name}</Td>
                  <Td>{expense.amount}</Td>
                  <Td>{expense.category}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Pagination
            itemCount={total ?? paginationState.size}
            perPage={paginationState.size}
            page={paginationState.page}
            variant={PaginationVariant.bottom}
            onSetPage={onSetPage}
            onPerPageSelect={onPerPageSelect}
          />
        </>
      );
  }
};

export { ExpensesTable };
