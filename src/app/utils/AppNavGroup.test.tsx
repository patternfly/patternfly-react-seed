import { AppNavGroup } from '@app/utils/AppNavGroup';
import * as React from 'react';
import { render } from '@prj/test-setup';

describe('AppNavGroup tests', () => {
  test('should render', async () => {
    const { getByText } = render(
      <AppNavGroup
        title={'Group title'}
        items={[
          { to: '/foo', title: 'foo' },
          { to: '/bar', title: 'bar' },
        ]}
      />
    );

    getByText('Group title');
    expect(getByText('foo').closest('a')).toHaveAttribute('href', '/foo');
    expect(getByText('bar').closest('a')).toHaveAttribute('href', '/bar')
  });
});
