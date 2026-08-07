import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { Badge } from '@rhds/elements/react/rh-badge/rh-badge.js';
import { Button } from '@rhds/elements/react/rh-button/rh-button.js';
import { Card } from '@rhds/elements/react/rh-card/rh-card.js';
import { Badge as PFBadge } from '@patternfly/react-core'

const RhdsDemo: React.FunctionComponent = () => {
  const [clicks, setClicks] = React.useState(0);

  return (
    <PageSection hasBodyWrapper={false}>
      <Title headingLevel="h1" size="lg">
        Red Hat Design System
      </Title>
      <p>
        RHDS web components below are rendered through React wrappers from{' '}
        <code>@rhds/elements</code>.
      </p>
      <Card>
        <h2 slot="header">Click counter</h2>
        <Badge slot="header" number={clicks} />
        <PFBadge isRead>{clicks}</PFBadge>
        <p>Use the RHDS button to increment the badge count.</p>
        <Button slot="footer" onClick={() => setClicks((count) => count + 1)}>
          Increment
        </Button>
      </Card>
    </PageSection>
  );
};

export { RhdsDemo };
