import * as React from 'react';
import { RouteProps, Route } from 'react-router';
import { PageSection, EmptyState, EmptyStateIcon, Title } from '@patternfly/react-core';
import { Spinner } from '@patternfly/react-core/dist/js/experimental';

export interface IDynamicImportChildrenProps<T> {
  component: React.ComponentType<T>
}

export interface IDynamicImportProps<T> extends RouteProps {
  getComponent: () => Promise<{ default: React.ComponentType<T> }>;
  children: (props: IDynamicImportChildrenProps<T>) => React.ReactElement
}

export function LazyRoute<T> ({
  getComponent,
  children,
  ...props
}: IDynamicImportProps<T>) {
  const [module, setModule] = React.useState<{ default: React.ComponentType<T>}
  | null>(null);
  const isStale = React.useRef(false);
  React.useEffect(() => {
    (async () => {
      const newModule = await getComponent();
      if (!isStale.current) {
        setModule(newModule);
      }
      return () => {
        isStale.current = true;
      }
    })();
  }, [getComponent, setModule, isStale]);
  return (
    <Route {...props}>
      {module && module.default
        ? children({ component: module.default })
        : (
          <PageSection aria-label='Loading Content Container'>
            <EmptyState>
              <EmptyStateIcon variant='container' component={Spinner} />
              <Title size='lg'>
                Loading
              </Title>
            </EmptyState>
          </PageSection>
        )
      }
    </Route>
  )
}
