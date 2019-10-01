import { LazyRoute } from '@app/utils/LazyRoute';
import * as React from 'react';
import { render, waitForElement } from '@prj/test-setup';

describe('LazyRoute tests', () => {
  test('should render a spinner while waiting for a component module to be loaded', async () => {
    const spyContent = jest.fn();
    const getComponent = jest.fn();
    const { getByText } = render(
      <LazyRoute
        getComponent={getComponent}
        children={spyContent}
      />
    );
    await waitForElement(() =>
      getByText('Loading')
    );
    expect(getComponent).toHaveBeenCalledTimes(1);
    expect(spyContent).toHaveBeenCalledTimes(0);
  });

  test('should render the async component', async () => {
    const getComponent = () => Promise.resolve({ default: () => <div>content</div> });
    const { getByText, debug, container } = render(
      <LazyRoute
        getComponent={getComponent}
      >
        {({ component: Component }) => <Component />}
      </LazyRoute>
    );
    await waitForElement(() =>
      getByText('content')
    );
  });
});
