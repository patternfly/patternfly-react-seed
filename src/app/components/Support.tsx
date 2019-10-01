import * as React from 'react';
import { PageSection, Title, EmptyState, EmptyStateVariant, EmptyStateIcon, EmptyStateBody, Button, EmptyStateSecondaryActions } from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';

export const Support: React.FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <PageSection {...props}>
      <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={CubesIcon} />
        <Title headingLevel="h5" size="lg">
          Empty State (Stub Support Module)
        </Title>
        <EmptyStateBody>
          This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
          enough to meet a variety of needs.
        </EmptyStateBody>
        <Button variant="primary">Primary Action</Button>
        <EmptyStateSecondaryActions>
          <Button variant="link">Multiple</Button>
          <Button variant="link">Action Buttons</Button>
          <Button variant="link">Can</Button>
          <Button variant="link">Go here</Button>
          <Button variant="link">In the secondary</Button>
          <Button variant="link">Action area</Button>
        </EmptyStateSecondaryActions>
      </EmptyState>
    </PageSection>
  );
}
