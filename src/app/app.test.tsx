import * as React from 'react';
import App from '@app/index';
import { fireEvent, render, screen,  } from '@testing-library/react';

describe('App tests', () => {
  test('should render default App component', () => {
    render(<App />);
    expect(screen).toMatchSnapshot();
  });

  it('should render a nav-toggle button', () => {
    render(<App />);
    expect(screen.getByRole('button')).toBe(true);
  });

  it('should hide the sidebar on smaller viewports', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 600 });
    render(<App />);
    window.dispatchEvent(new Event('resize'));
    expect(screen).container.querySelector('#page-sidebar').hasClass('pf-m-collapsed').toBeTruthy();
  });

  it('should expand the sidebar on larger viewports', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1200 });
    render(<App />);
    window.dispatchEvent(new Event('resize'));
    expect(screen).container.querySelector('#page-sidebar').hasClass('pf-m-expanded').toBeTruthy();
  });

  it('should hide the sidebar when clicking the nav-toggle button', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1200 });
    render(<App />);
    window.dispatchEvent(new Event('resize'));
    const button = screen.getByRole('button');
    expect(screen).container.find('#page-sidebar').hasClass('pf-m-expanded').toBeTruthy();
    fireEvent.click(button);
    expect(screen).container.querySelector('#page-sidebar').hasClass('pf-m-collapsed').toBeTruthy();
    expect(screen).find('#page-sidebar').hasClass('pf-m-expanded').toBeFalsy();
  });
});
