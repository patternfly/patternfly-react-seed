import { useA11yRouteChange, useA11yRouteContainer } from '@app/utils';
import { render, fireEvent, wait } from '@prj/test-setup';
import { waitForElement } from '@testing-library/dom';
import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const SamplePage = () => {
  const a11yContainerProps = useA11yRouteContainer();
  const [focused, setFocused] = React.useState(false);
  const handleFocus = () => {
    setFocused(true);
  }
  return (
    <div {...a11yContainerProps} onFocus={handleFocus}>
      {focused ? <div data-testid={'test-focused'}>I'm focused!</div> : 'Not in focus yet'}
    </div>
  );
};

describe('useDocumentTitle tests', () => {
  test('should change the document title', async () => {
    const { getByTestId } = render(
      <Switch>
        <Route path={'/autofocus/:optionalParam?'}>
          <SamplePage />
        </Route>
        <Route>
          <Link to={'/autofocus'} data-testid={'link'
          }>Go to page</Link>
        </Route>
      </Switch>
    );
    fireEvent.click(getByTestId('link'));
    await waitForElement(() => getByTestId('test-focused'));
  });
});
