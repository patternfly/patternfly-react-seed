import { Dashboard } from '@app/Dashboard/Dashboard';
import { NotFound } from '@app/NotFound/NotFound';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthenticationGuard } from './auth/AuthenticationGuard';
import { Logout } from './auth/Logout';

const AppRouter = (): React.ReactElement => (
  <Routes>
    <Route path="/" element={<AuthenticationGuard component={Dashboard} />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export { AppRouter };
