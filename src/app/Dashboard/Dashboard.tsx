import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { TopicsList } from './TopicsList';

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">
      Dashboard Page Title
    </Title>
    <TopicsList />
  </PageSection>
);

export { Dashboard };
