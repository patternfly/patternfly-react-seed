import { PropsWithChildren } from 'react';
import * as React from 'react';
import { render, fireEvent } from '@prj/test-setup';
import { AppLayout, IAppLayoutProps } from './AppLayout';

export function makeApp(props: Partial<PropsWithChildren<IAppLayoutProps>> = {}) {
  props = Object.assign({
    logo: <div>App logo</div>,
    avatar: <div>Avatar</div>,
    toolbar: <div>Toolbar</div>,
    navVariant: 'vertical',
    navItems: [
      {
        title: 'Samples',
        to: '/samples/',
        items: [
          { to: '/samples/foo', title: 'Foo' },
          undefined,
          { to: '/samples/bar', title: 'Bar' },
          { to: '/samples/baz', title: 'Baz' },
        ],
      },
      { to: '/support', title: 'Support' },
      { to: '/something', title: 'Something' },
    ],
    navGroupsStyle: 'expandable',
    startWithOpenNav: true,
    theme: 'dark',
    children: <div data-testid={'test-content'}>test</div>
  }, props);
  return (
    <AppLayout {...props as IAppLayoutProps} />
  )
}

export function renderApp(...args: Parameters<typeof makeApp>) {
  return render(makeApp(...args));
}

describe('AppLayout tests', () => {
  test('should render as configured', async () => {
    const { getByTestId, getByText } = renderApp();
    getByTestId('test-content');
    getByText('App logo');
    getByText('Avatar');
    getByText('Toolbar');
    getByTestId('app-sidebar');
  });

  it('should render a nav-toggle button', async () => {
    const { getByLabelText } = renderApp();
    getByLabelText('Global navigation')
  });

  it('should hide the sidebar when clicking the nav-toggle button', async () => {
    const { getByLabelText, getByTestId } = renderApp();
    const navButton = getByLabelText('Global navigation');
    const sidebar = getByTestId('app-sidebar');
    expect(sidebar).toHaveClass('pf-m-expanded');
    fireEvent.click(navButton);
    expect(sidebar).toHaveClass('pf-m-collapsed');
  });

  it('should start with an hidden sidebar', async () => {
    const { getByTestId } = renderApp({ startWithOpenNav: false });
    const sidebar = getByTestId('app-sidebar');
    expect(sidebar).toHaveClass('pf-m-collapsed');
  });
});
