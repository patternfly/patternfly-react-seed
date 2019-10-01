import * as H from 'history';
import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  NavExpandable
} from '@patternfly/react-core';
import { AppNavItem, IAppNavItemProps } from '@app/utils';

export interface IAppNavExpandableProps<S = {}> {
  title: string;
  to: string;
  items: Array<IAppNavItemProps | undefined>;
}

export const AppNavExpandable: React.FunctionComponent<IAppNavExpandableProps> = ({ title, to, items }) => {
  const match = useRouteMatch({
    path: to
  });
  const isActive = !!match;
  return (
    <NavExpandable
      title={title}
      isActive={isActive}
      isExpanded={isActive}
    >
      {items.map((subNavItem, jdx) => <AppNavItem {...subNavItem} key={jdx} />)}
    </NavExpandable>
  );
}
