import * as React from 'react';
import App from '@app/index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App tests', () => {
  test('should render default App component', () => {
    render(<App />);

    // Test that key components are present
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    expect(screen.getByText('PatternFly logo')).toBeInTheDocument();
    expect(screen.getByText('User Name')).toBeInTheDocument();
  });

  it('should render navigation tabs', () => {
    render(<App />);

    expect(screen.getByRole('tab', { name: 'Dashboard' })).toBeVisible();
    expect(screen.getByRole('tab', { name: 'Support' })).toBeVisible();
    expect(screen.getByRole('tab', { name: 'Settings' })).toBeVisible();
  });

  it('should render sidebar buttons', () => {
    render(<App />);

    // Get all buttons with these names (there are two sidebars with the same buttons)
    const componentsButtons = screen.getAllByRole('button', { name: 'Components' });
    const helpButtons = screen.getAllByRole('button', { name: 'Help' });
    const themeButtons = screen.getAllByRole('button', { name: 'Switch to dark theme' });

    expect(componentsButtons.length).toBeGreaterThan(0);
    expect(helpButtons.length).toBeGreaterThan(0);
    expect(themeButtons.length).toBeGreaterThan(0);
    expect(componentsButtons[0]).toBeVisible();
  });

  it('should allow tab navigation', async () => {
    const user = userEvent.setup();

    render(<App />);

    const supportTab = screen.getByRole('tab', { name: 'Support' });

    await user.click(supportTab);

    expect(supportTab).toHaveAttribute('aria-selected', 'true');
  });
});
