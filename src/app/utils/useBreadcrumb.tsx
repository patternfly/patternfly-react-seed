import * as React from 'react';
import { AppLayoutContext } from '@app/utils/AppLayout';

export function useBreadcrumb(getBreadcrumb: () => React.ReactNode) {
  const context = React.useContext(AppLayoutContext);

  React.useEffect(function setupElement() {
    context.setBreadcrumb(getBreadcrumb());
    return function removeElement() {
      context.setBreadcrumb(null);
    };
  }, [getBreadcrumb]);
}
