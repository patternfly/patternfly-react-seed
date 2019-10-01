import * as React from 'react';

export interface IDashboardParamsProps extends React.HTMLAttributes<HTMLDivElement> {
  sample: string;
}

export const DashboardParams: React.FunctionComponent<IDashboardParamsProps> = ({ sample }) => {
  return (
    <div>Parameter "sample": {sample}</div>
  )
};
