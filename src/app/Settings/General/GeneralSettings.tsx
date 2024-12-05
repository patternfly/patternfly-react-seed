import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { useDocumentTitle } from '@app/utils/useDocumentTitle';

const GeneralSettings: React.FunctionComponent = () => {
  useDocumentTitle("General Settings");
  return (
    <PageSection hasBodyWrapper={false}>
      <Title headingLevel="h1" size="lg">
        General Settings Page Title
      </Title>
    </PageSection>
  );
}

export { GeneralSettings };
