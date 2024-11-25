import { Expense } from '@app/model/Expense';
import { Table, Tbody, Td, Th, ThProps, Thead, Tr } from '@patternfly/react-table';
import React from 'react';

const ExpensesTable = () => {
  const [activeSortIndex, setActiveSortIndex] = React.useState<number>();
  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc'>();
  const expenses: Expense[] = [
    {
      date: 0,
      name: 'x',
      amount: 100,
      category: 'y',
    },
    {
      date: 1,
      name: 'x1',
      amount: 100,
      category: 'y1',
    },
    {
      date: 2,
      name: 'x2',
      amount: 100,
      category: 'y2',
    },
  ];

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

  return (
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
        {expenses.map((expense, rowIndex) => (
          <Tr key={rowIndex}>
            <Td>{expense.date}</Td>
            <Td>{expense.name}</Td>
            <Td>{expense.amount}</Td>
            <Td>{expense.category}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export { ExpensesTable };
