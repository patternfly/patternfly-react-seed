import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { FunctionComponent } from 'react';

type AuthenticationGuardProps = {
  component: FunctionComponent;
};

export const AuthenticationGuard = ({ component }: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Loading...</div>,
  });

  return <Component />;
};
