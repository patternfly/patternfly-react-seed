import * as React from 'react';
import { Support } from '@app/components';
import { useA11yRouteContainer, useDocumentTitle } from '@app/utils';

export default function SupportPage() {
  const a11yContainerProps = useA11yRouteContainer();
  useDocumentTitle('Support');
  return (
    <Support {...a11yContainerProps} />
  );
}
