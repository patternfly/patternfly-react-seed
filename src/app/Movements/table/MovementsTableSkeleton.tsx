import React from 'react';

import { Skeleton } from '@patternfly/react-core';
import { Table, TableVariant, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';

type MovementsTableSkeletonProps = {
  size?: number;
};
const MovementsTableSkeleton = ({ size }: MovementsTableSkeletonProps) => (
  <Table aria-label="Skeletong Sortable table for movements" variant={TableVariant.compact}>
    <Thead>
      <Tr>
        <Th width={10}>
          <Skeleton />
        </Th>
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
          <Td width={10} dataLabel="select">
            <Skeleton />
          </Td>
          <Td dataLabel="name">
            <Skeleton screenreaderText={`loading date ${i}...`} />
          </Td>
          <Td textCenter>
            <Skeleton screenreaderText={`loading name ${i}...`} />
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
