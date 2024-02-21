import * as React from 'react';
import { Flex, FlexItem, Grid, GridItem, PageSection } from '@patternfly/react-core';
import { CardHorizontalGrid } from './CardHorizontalGrid.tsx';
import { CardEventsView } from './CardEventsView.tsx';
import { CardStatus } from './CardStatus.tsx';
import { CardDetailsDemo } from './CardDetailsDemo.tsx';
// Inventory card
import { InventoryCard } from './InventoryCard.tsx';
import { CardNested } from './CardNested.tsx';
// Recommendations by severity card
import { RecommendationsCard } from './RecommendationsCard.tsx';

const Dashboard: React.FunctionComponent = () => (
  <PageSection isWidthLimited>
    <Grid hasGutter>
      <CardHorizontalGrid />
      <GridItem lg={4} xl2={6} style={{ '--pf-v5-l-grid--item--Order-on-lg': 3 } as React.CSSProperties}>
        <Flex direction={{ default: 'column' }}>
          <CardStatus />
          <CardNested />
          <RecommendationsCard />
        </Flex>
      </GridItem>
      <GridItem lg={4} xl2={3} style={{ '--pf-v5-l-grid--item--Order-on-lg': 2 } as React.CSSProperties}>
        <Flex direction={{ default: 'column', md: 'row', lg: 'column' }}>
          <FlexItem flex={{ default: 'flex_1' }}>
            <CardDetailsDemo />
          </FlexItem>
          <FlexItem flex={{ default: 'flex_1' }}>
            <InventoryCard />
          </FlexItem>
        </Flex>
      </GridItem>
      <GridItem lg={4} xl2={3} style={{ '--pf-v5-l-grid--item--Order-on-lg': 4 } as React.CSSProperties}>
        <Flex direction={{ default: 'column' }}>
          <CardEventsView />
        </Flex>
      </GridItem>
    </Grid>
  </PageSection>
);

export { Dashboard };
