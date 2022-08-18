import * as React from 'react';
import { CubesIcon } from '@patternfly/react-icons';
import {
  PageSection,
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';

export interface ISupportProps {
  sampleProp?: string;
}

// eslint-disable-next-line prefer-const
let Support: React.FunctionComponent<ISupportProps> = () => (
  <PageSection>
    <EmptyState variant={EmptyStateVariant.full}>
      <EmptyStateIcon icon={CubesIcon} />
      <Title headingLevel="h1" size="lg">
        Empty State (Stub Support Module)
      </Title>
      <EmptyStateBody>
        <TextContent>
          <Text component="p">
            This represents an the empty state pattern in Patternfly 4. Hopefully it&apos;s simple enough to use but
            flexible enough to meet a variety of needs.
          </Text>
          <Text component={TextVariants.small}>
            This text has overridden a css component variable to demonstrate how to apply customizations using
            PatternFly&apos;s global variable API.
          </Text>
        </TextContent>
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

export { Support };
