import { Content, ContentVariants, PageSection, Title } from '@patternfly/react-core';
import React from 'react';

const Logout = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">
      Logout!
    </Title>
    <Content component={ContentVariants.p}>Has cerrado sesión correctamente.</Content>
  </PageSection>
);

export { Logout };
