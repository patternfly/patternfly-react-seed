import { Category } from '@app/model/Category';
import { Expense } from '@app/model/Expense';
import { ExpensesQuery } from '@app/model/query/ExpensesQuery';
import { Button, Label, Pagination, PaginationVariant, Timestamp, Tooltip } from '@patternfly/react-core';
import { Table, Tbody, Td, Th, ThProps, Thead, Tr } from '@patternfly/react-table';
import { MutationStatus, QueryStatus } from '@tanstack/react-query';
import React from 'react';
import { ChangeCategoryModal } from '../ChangeCategoryModal';
import { ExpensesTableFilter } from './ExpensesTableFilter';
import { ExpensesTableSkeleton } from './ExpensesTableSkeleton';

type ExpensesTableProps = {
  expenses?: Expense[];
  categories?: Category[];
  total?: number;
  queryStatus: QueryStatus;
  patchStatus: MutationStatus;
  expensesQuery: ExpensesQuery;
  queryChangeCallback?: (query: ExpensesQuery) => void;
  patchExpenses: (expenses: Expense[]) => void;
};

const ExpensesTable = ({
  expenses,
  categories,
  total,
  queryStatus,
  patchStatus,
  expensesQuery,
  queryChangeCallback,
  patchExpenses,
}: ExpensesTableProps) => {
  const [activeSortIndex, setActiveSortIndex] = React.useState<number>();
  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc'>();
  const [queryState, setQueryState] = React.useState<ExpensesQuery>(expensesQuery);

  const [selectedExpenses, setSelectedExpenses] = React.useState<Expense[]>([]);
  const [shifting, setShifting] = React.useState(false);
  const [recentSelectedRowIndex, setRecentSelectedRowIndex] = React.useState<number | null>(null);
  const isAnyRowSelected = selectedExpenses.length > 0;
  const areAllRowsSelected = selectedExpenses.length === expenses?.length;

  const [isChangeCategoryModalOpen, setIsChangeCategoryModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (queryChangeCallback && JSON.stringify(expensesQuery) !== JSON.stringify(queryState)) {
      queryChangeCallback(queryState);
    }
    // avoid reaction on pagination
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryState, queryChangeCallback]);

  React.useEffect(() => {
    setQueryState(expensesQuery);
  }, [expensesQuery, setQueryState]);

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

  const getSortParams = (columnIndex: number, order_by: string): ThProps['sort'] => ({
    sortBy: {
      index: activeSortIndex,
      direction: activeSortDirection,
    },
    onSort: (_event, index, direction) => {
      setActiveSortIndex(index);
      setActiveSortDirection(direction as 'desc' | 'asc');
      setQueryState({ ...queryState, order_by, direction: direction as 'desc' | 'asc' });
    },
    columnIndex,
  });

  const isRowSelected = (expense: Expense) => selectedExpenses.find((e) => e.id === expense.id) !== undefined;

  const setRowSelected = (expense: Expense, isSelecting = true) =>
    setSelectedExpenses((prevSelected) => {
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

  const selectAllRepos = (isSelecting = true) => setSelectedExpenses(isSelecting && expenses ? expenses : []);

  return (
    <>
      <ExpensesTableFilter
        query={queryState}
        queryChangeCallback={(query) => setQueryState({ ...queryState, ...query })}
        disabled={![queryStatus, patchStatus].includes('success')}
        categories={categories}
      />
      <p>patchStatus {patchStatus}</p>
      {(() => {
        switch (true) {
          case [patchStatus, queryStatus].includes('pending'):
            return <ExpensesTableSkeleton />;
          case [patchStatus, queryStatus].includes('error'):
            return <p>Error</p>;
          default:
            return (
              <>
                <Table aria-label="Sortable table for expenses">
                  <Thead>
                    <Tr>
                      <Th
                        select={{
                          onSelect: (_event, isSelecting) => selectAllRepos(isSelecting),
                          isSelected: areAllRowsSelected,
                        }}
                        aria-label="Row select"
                      />
                      <Th sort={getSortParams(0, 'date')}>Fecha</Th>
                      <Th sort={getSortParams(1, 'name')}>Concepto</Th>
                      <Th sort={getSortParams(2, 'amount')}>Importe</Th>
                      <Th sort={getSortParams(3, 'category')}>Categoría</Th>
                      <Th>
                        <Button
                          variant="primary"
                          size="sm"
                          isDisabled={!isAnyRowSelected}
                          onClick={() => setIsChangeCategoryModalOpen(true)}
                        >
                          Cambiar Categoría
                        </Button>
                      </Th>
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
                        <Td>
                          <Tooltip aria="none" aria-live="polite" content={expense.date}>
                            <Timestamp dateFormat="short" date={new Date(expense.date)} />
                          </Tooltip>
                        </Td>
                        <Td>
                          <Tooltip aria="none" aria-live="polite" content={expense.description}>
                            <span>{expense.name}</span>
                          </Tooltip>
                        </Td>
                        <Td>
                          <span style={{ color: expense.amount < 0 ? 'red' : 'green', fontWeight: 'bold' }}>
                            {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(
                              expense.amount,
                            )}
                          </span>
                        </Td>
                        <Td>
                          <Label>{expense.category.name.toUpperCase()}</Label>
                        </Td>
                        <Td></Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                <Pagination
                  itemCount={total ?? queryState.size}
                  perPage={queryState.size}
                  page={queryState.page}
                  variant={PaginationVariant.bottom}
                  onSetPage={(_event: React.MouseEvent | React.KeyboardEvent | MouseEvent, page: number) =>
                    setQueryState({ ...queryState, page })
                  }
                  onPerPageSelect={(
                    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
                    size: number,
                    page: number,
                  ) => setQueryState({ ...queryState, page, size })}
                />
              </>
            );
        }
      })()}
      {isChangeCategoryModalOpen ? (
        <ChangeCategoryModal
          numberOfSelectedExpenses={selectedExpenses.length}
          categories={categories}
          onSubmitCallback={(category: Category) =>
            patchExpenses(selectedExpenses?.map((expense) => ({ ...expense, category }) as Expense) ?? [])
          }
          onCloseCallback={() => setIsChangeCategoryModalOpen(false)}
        />
      ) : null}
    </>
  );
};

export { ExpensesTable };
