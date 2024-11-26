import { Expense } from '@app/model/Expense';
import { PaginationType } from '@app/queries/PaginationType';
import { Pagination, PaginationVariant } from '@patternfly/react-core';
import { Table, Tbody, Td, Th, ThProps, Thead, Tr } from '@patternfly/react-table';
import { QueryStatus } from '@tanstack/react-query';
import React from 'react';
import { ExpensesTableSkeleton } from './ExpensesTableSkeleton';

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

  const [selectedRows, setSelectedRows] = React.useState<Expense[]>([]);
  const [shifting, setShifting] = React.useState(false);
  const [recentSelectedRowIndex, setRecentSelectedRowIndex] = React.useState<number | null>(null);
  const areAllRowsSelected = selectedRows.length === expenses?.length;

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

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setShifting(true);
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setShifting(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

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

  const isRowSelected = (expense: Expense) => selectedRows.find((e) => e.id === expense.id) !== undefined;

  const setRowSelected = (expense: Expense, isSelecting = true) =>
    setSelectedRows((prevSelected) => {
      const otherSelectedRows: Expense[] = prevSelected.filter((r) => r.id !== expense.id);
      return isSelecting ? [...otherSelectedRows, expense] : otherSelectedRows;
    });

  const onSelectRepo = (expense: Expense, rowIndex: number, isSelecting: boolean) => {
    // If the user is shift + selecting the checkboxes, then all intermediate checkboxes should be selected
    if (expenses && shifting && recentSelectedRowIndex !== null) {
      const numberSelected = rowIndex - recentSelectedRowIndex;
      const intermediateIndexes =
        numberSelected > 0
          ? Array.from(new Array(numberSelected + 1), (_x, i) => i + recentSelectedRowIndex)
          : Array.from(new Array(Math.abs(numberSelected) + 1), (_x, i) => i + rowIndex);
      intermediateIndexes.forEach((index) => setRowSelected(expenses[index], isSelecting));
    } else {
      setRowSelected(expense, isSelecting);
    }
    setRecentSelectedRowIndex(rowIndex);
  };

  const selectAllRepos = (isSelecting = true) => setSelectedRows(isSelecting && expenses ? expenses : []);

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
                <Th
                  select={{
                    onSelect: (_event, isSelecting) => selectAllRepos(isSelecting),
                    isSelected: areAllRowsSelected,
                  }}
                  aria-label="Row select"
                />
                <Th sort={getSortParams(0)}>Fecha</Th>
                <Th sort={getSortParams(1)}>Concepto</Th>
                <Th sort={getSortParams(2)}>Importe</Th>
                <Th sort={getSortParams(3)}>Categoría</Th>
                <Th sort={getSortParams(4)}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {expenses?.map((expense, rowIndex) => (
                <Tr key={rowIndex}>
                  <Td
                    select={{
                      rowIndex,
                      onSelect: (_event, isSelecting) => onSelectRepo(expense, rowIndex, isSelecting),
                      isSelected: isRowSelected(expense),
                    }}
                  />
                  <Td>{expense.date}</Td>
                  <Td>{expense.name}</Td>
                  <Td>{expense.amount}</Td>
                  <Td>{expense.category.name}</Td>
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
