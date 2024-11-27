import React from 'react';

import { Skeleton } from '@patternfly/react-core';
import { Table, TableVariant, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';

type MovementsTableSkeletonProps = {
  size?: number;
};
const MovementsTableSkeleton = ({ size }: MovementsTableSkeletonProps) => (
  <Table aria-label="Cluster with issues table skeleton" variant={TableVariant.compact}>
    <Thead>
      <Tr>
        <Th></Th>
        <Th>Fecha</Th>
        <Th>Concepto</Th>
        <Th>Importe</Th>
        <Th>Categoría</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {Array.from(Array(size ?? 10).keys()).map((i) => (
        <Tr key={i}>
          <Td dataLabel="select"></Td>
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
          <Td dataLabel="action"></Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export { MovementsTableSkeleton };
