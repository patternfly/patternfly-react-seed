import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts';

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Title!</Title>
    <div style={{ height: '250px', width: '600px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Line chart example"
        containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
        legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
        legendOrientation="vertical"
        legendPosition="right"
        height={250}
        maxDomain={{ y: 10 }}
        minDomain={{ y: 0 }}
        padding={{
          bottom: 50,
          left: 50,
          right: 200, // Adjusted to accommodate legend
          top: 50
        }}
        width={600}
      >
        <ChartAxis tickValues={[2, 3, 4]} />
        <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
        <ChartGroup>
          <ChartLine
            data={[
              { name: 'Cats', x: '2015', y: 1 },
              { name: 'Cats', x: '2016', y: 2 },
              { name: 'Cats', x: '2017', y: 5 },
              { name: 'Cats', x: '2018', y: 3 }
            ]}
          />
          <ChartLine
            data={[
              { name: 'Dogs', x: '2015', y: 2 },
              { name: 'Dogs', x: '2016', y: 1 },
              { name: 'Dogs', x: '2017', y: 7 },
              { name: 'Dogs', x: '2018', y: 4 }
            ]}
            style={{
              data: {
                strokeDasharray: '3,3'
              }
            }}
          />
          <ChartLine
            data={[
              { name: 'Birds', x: '2015', y: 3 },
              { name: 'Birds', x: '2016', y: 4 },
              { name: 'Birds', x: '2017', y: 9 },
              { name: 'Birds', x: '2018', y: 5 }
            ]}
          />
          <ChartLine
            data={[
              { name: 'Mice', x: '2015', y: 3 },
              { name: 'Mice', x: '2016', y: 3 },
              { name: 'Mice', x: '2017', y: 8 },
              { name: 'Mice', x: '2018', y: 7 }
            ]}
          />
        </ChartGroup>
      </Chart>
    </div>
  </PageSection>
)

export { Dashboard };
