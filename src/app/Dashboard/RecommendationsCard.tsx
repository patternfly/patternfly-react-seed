import React from 'react';
import { Card, CardBody, CardFooter, CardTitle, Flex, Grid } from '@patternfly/react-core';
import { ChartPie } from '@patternfly/react-charts';

const severityData = [
  {
    count: 2,
    level: 'Critical',
  },
  {
    count: 5,
    level: 'Important',
  },
  {
    count: 7,
    level: 'Moderate',
  },
  {
    count: 12,
    level: 'Low',
  },
];

export const RecommendationsCard: React.FC = () => (
  <Card>
    <CardTitle>Recommendations by severity</CardTitle>
    <CardBody>
      <Flex display={{ default: 'inlineFlex' }}>
        <Grid hasGutter span={3}>
          {severityData.map((item, index) => (
            <Flex
              key={index}
              direction={{ default: 'column' }}
              spaceItems={{ default: 'spaceItemsXs' }}
              alignItems={{ default: 'alignItemsCenter' }}
            >
              <span
                style={{
                  color: 'var(--pf-t--global--text--color--brand--default)',
                  fontSize: 'var(--pf-t--global--font--size--2xl)',
                }}
              >
                {item.count}
              </span>
              {item.level}
            </Flex>
          ))}
        </Grid>
      </Flex>
    </CardBody>
    <CardTitle>Recommendations by category</CardTitle>
    <CardBody>
      <div style={{ height: '230px', width: '350px' }}>
        <ChartPie
          ariaDesc="Categories of recommendations"
          ariaTitle="Pie chart example"
          constrainToVisibleArea
          data={[
            { x: 'Fault Tolerance', y: 4 },
            { x: 'Performance', y: 4 },
            { x: 'Service Availability', y: 25 },
            { x: 'Security', y: 12 },
          ]}
          height={230}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          legendData={[
            { name: 'Fault Tolerance: 4' },
            { name: 'Performance: 4' },
            { name: 'Service Availability: 25' },
            { name: 'Security: 12' },
          ]}
          legendOrientation="vertical"
          legendPosition="right"
          name="chart1"
          padding={{
            bottom: 20,
            left: 20,
            right: 200, // Adjusted to accommodate legend
            top: 20,
          }}
          width={350}
        />
      </div>
    </CardBody>
    <CardFooter>
      <a href="#">View more</a>
    </CardFooter>
  </Card>
);
