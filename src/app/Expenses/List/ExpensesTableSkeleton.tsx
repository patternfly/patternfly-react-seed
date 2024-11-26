import React from 'react';

import { Skeleton } from '@patternfly/react-core';
import { Table, TableVariant, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';

const ExpensesTableSkeleton = () => (
  <>
    <Table aria-label="Cluster with issues table skeleton" variant={TableVariant.compact}>
      <Thead>
        <Tr>
          <Th>Fecha</Th>
          <Th>Concepto</Th>
          <Th>Importe</Th>
          <Th>Categoría</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array.from(Array(5).keys()).map((i) => (
          <Tr key={i}>
            <Td dataLabel="name">
              <Skeleton screenreaderText={`loading date ${i}...`} />
            </Td>
            <Td textCenter>
              <Skeleton screenreaderText={`loading description ${i}...`} />
            </Td>
            <Td>
              <Skeleton screenreaderText={`loading amount ${i}...`} />
            </Td>
            <Td textCenter>
              <Skeleton screenreaderText={`loading category ${i}...`} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </>
);

export { ExpensesTableSkeleton };
