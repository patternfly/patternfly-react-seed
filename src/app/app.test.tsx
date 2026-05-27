import * as React from 'react';
import App from '@app/index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, test } from 'vitest';

describe('App tests', () => {
  test('should render default App component', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a nav-toggle button', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: 'Global navigation' })).toBeVisible();
  });

  it('should toggle the sidebar when clicking the nav-toggle button', async () => {
    const user = userEvent.setup();

    render(<App />);

    const button = screen.getByRole('button', { name: 'Global navigation' });
    const initialExpanded = button.getAttribute('aria-expanded');

    await user.click(button);

    expect(button.getAttribute('aria-expanded')).not.toBe(initialExpanded);
  });
});
