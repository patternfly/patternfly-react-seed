import { makeApp } from '@app/utils/AppLayout.test';
import { useBreadcrumb } from '@app/utils/useBreadcrumb';
import { render } from '@prj/test-setup';
import * as React from 'react';

const SamplePage = () => {
  const getBreadcrumb = React.useCallback(() => {
    return (
      <div data-testid={'test-breadcrumb'}>breadcrumb</div>
    );
  }, []);
  useBreadcrumb(getBreadcrumb);

  return <div data-testid={'test-page-with-breadcrumb'}>content</div>;
};

describe('useBreadcrumb tests', () => {
  test('should render a breadcrumb, and then remove it if the content changes to a page without a breadcrumb', async () => {
    const { getByTestId, getByText, queryByTestId, rerender } = render(makeApp({
      children: <SamplePage />
    }));
    getByTestId('test-breadcrumb');
    getByTestId('test-page-with-breadcrumb');
    getByText('breadcrumb');
    getByText('content');

    rerender(makeApp({
      children: <div data-testid={'test-new-page'}>new page</div>
    }));
    getByTestId('test-new-page');
    expect(queryByTestId('test-breadcrumb')).toBeNull()

  });
});
