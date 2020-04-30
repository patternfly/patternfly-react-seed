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
  EmptyStateSecondaryActions
} from '@patternfly/react-core';

export interface ISupportProps {
  sampleProp?: string;
}

const View: React.FunctionComponent<ISupportProps> = () => (
    <PageSection>
      <EmptyState variant={EmptyStateVariant.full}>
        Epic 2
      </EmptyState>
    </PageSection>
  )

export { View };
