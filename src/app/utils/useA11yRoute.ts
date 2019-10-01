import * as React from 'react';
import { useLocation, useRouteMatch } from 'react-router';
import { LastLocationType, useLastLocation } from 'react-router-last-location';

export function accessibleRouteChangeHandler(id: string, timeout = 50) {
  return setTimeout(() => {
    const mainContainer = document.getElementById(id);
    if (mainContainer) {
      mainContainer.focus();
    }
  }, timeout);
}

export const useA11yRouteContainerId = () => {
  const { path } = useRouteMatch()!;
  return `route-content-${path}`;
};

/**
 * a custom hook for sending focus to the primary content container
 * after a view has loaded so that subsequent press of tab key
 * sends focus directly to relevant content
 */
export const useA11yRouteChange = () => {
  const id = useA11yRouteContainerId();
  let routeFocusTimer: NodeJS.Timeout;
  const lastNavigation = useLastLocation();
  const previousNavigation = React.useRef<LastLocationType | null>();
  React.useEffect(() => {
    let isStale = true;
    if (lastNavigation !== null) {
      previousNavigation.current = lastNavigation;
      isStale = false;
      routeFocusTimer = accessibleRouteChangeHandler(id, 50);
    }
    return () => {
      if (routeFocusTimer && isStale) {
        clearTimeout(routeFocusTimer);
      }
    };
  }, [id, lastNavigation, previousNavigation]);
};

export const useA11yRouteContainer = () => {
  useA11yRouteChange();
  const id = useA11yRouteContainerId();
  const tabIndex = -1;
  return { id, tabIndex };
};
