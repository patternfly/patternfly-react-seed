import * as React from 'react';
import {
  NavGroup, NavItemSeparator
} from '@patternfly/react-core';
import { AppNavItem, IAppNavItemProps } from '@app/utils';

export interface IAppNavGroupProps {
  title: string;
  items: Array<IAppNavItemProps | undefined>;
}

export const AppNavGroup: React.FunctionComponent<IAppNavGroupProps> = ({ title, items }) => {
  return (
    <NavGroup
      title={title}
    >
      {items.map((subNavItem, jdx) => <AppNavItem {...subNavItem} key={jdx} /> )}
    </NavGroup>
  );
}
