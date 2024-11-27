import { MovementsTable } from '@app/Movements/List/MovementsTable';
import { Movement } from '@app/model/Movement';
import { MovementsQuery } from '@app/model/query/MovementsQuery';
import { Pagination } from '@app/model/query/Pagination';
import { Sorting } from '@app/model/query/Sorting';
import { useFetchCategories } from '@app/queries/categories/useFetchCategories';
import { useFetchMovements } from '@app/queries/movements/useFetchMovements';
import { usePatchMovements } from '@app/queries/movements/usePatchMovements';
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
    size: 100,
    direction: 'asc',
  });

  const fetchMovements = useFetchMovements('dashboard', movementsQuery);
  const fetchCategories = useFetchCategories('dashboard', categoriesQuery);
  const patchMovements = usePatchMovements('dashboard');

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
        movementsQuery={movementsQuery}
        queryChangeCallback={setMovementsQuery}
        patchMovements={(movements: Movement[]) => patchMovements.mutate(movements)}
      />
    </PageSection>
  );
};

export { Dashboard };
