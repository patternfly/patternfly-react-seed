import { MovementsTable } from '@app/Movements/table/MovementsTable';
import { Movement } from '@app/model/Movement';
import { MovementsQuery } from '@app/model/query/MovementsQuery';
import { Pagination } from '@app/model/query/Pagination';
import { Sorting } from '@app/model/query/Sorting';
import { useFetchCategories } from '@app/queries/categories/useFetchCategories';
import { useBulkMovement } from '@app/queries/movements/useBulkMovement';
import { useDeleteMovement } from '@app/queries/movements/useDeleteMovement';
import { useFetchMovements } from '@app/queries/movements/useFetchMovements';
import { usePatchMovements } from '@app/queries/movements/usePatchMovements';
import { usePostMovement } from '@app/queries/movements/usePostMovement';
import { PageSection, Title } from '@patternfly/react-core';
import * as React from 'react';

const Dashboard: React.FunctionComponent = () => {
  const [movementsQuery, setMovementsQuery] = React.useState<MovementsQuery>({
    page: 1,
    size: 20,
    direction: 'asc',
  });
  const [categoriesQuery] = React.useState<Pagination & Sorting>({
    page: 1,
    size: 15,
    direction: 'asc',
  });

  const fetchMovements = useFetchMovements('dashboard', movementsQuery);
  const fetchCategories = useFetchCategories('dashboard', categoriesQuery);
  const patchMovements = usePatchMovements('dashboard');
  const bulkMovements = useBulkMovement('dashboard');
  const postMovement = usePostMovement('dashboard');
  const deleteMovement = useDeleteMovement('dashboard');

  return (
    <PageSection hasBodyWrapper={false}>
      <Title headingLevel="h1" size="lg">
        Dashboard
      </Title>
      <MovementsTable
        movements={fetchMovements.data?.items}
        categories={fetchCategories.data?.items}
        total={fetchMovements.data?.total}
        queryStatus={fetchMovements.status}
        patchStatus={patchMovements.status}
        bulkMovementsStatus={bulkMovements.status}
        movementsQuery={movementsQuery}
        queryChangeCallback={setMovementsQuery}
        refetchMovementsCallback={fetchMovements.refetch}
        patchMovements={(movements: Movement[]) => patchMovements.mutate(movements)}
        postMovement={(movement: Partial<Movement>) => postMovement.mutate(movement)}
        deleteMovement={(id: string) => deleteMovement.mutate(id)}
        bulkMovements={(movements: Movement[]) => bulkMovements.mutate(movements)}
      />
    </PageSection>
  );
};

export { Dashboard };
