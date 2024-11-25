import App from '@app/index';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as React from 'react';

describe('App tests', () => {
  it('should render a nav-toggle button', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: 'Global navigation' })).toBeVisible();
  });
});
