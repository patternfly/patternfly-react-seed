import * as React from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  CompassContent,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Label,
  Panel,
  Progress,
  ProgressSize,
  ProgressVariant,
  Title,
} from '@patternfly/react-core';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon,
} from '@patternfly/react-icons';

const Dashboard: React.FunctionComponent = () => (
  <>
    <CompassContent>
      <Grid hasGutter>
        {/* Status Cards */}
        <GridItem lg={3} md={6} sm={12}>
          <Panel>
            <Card isPlain isFullHeight>
              <CardTitle>
                <Flex alignItems={{ default: 'alignItemsCenter' }}>
                  <FlexItem>
                    <CheckCircleIcon color="var(--pf-t--global--icon--color--status--success--default)" />
                  </FlexItem>
                  <FlexItem>System Health</FlexItem>
                </Flex>
              </CardTitle>
              <CardBody>
                <Title headingLevel="h2" size="2xl">
                  98.5%
                </Title>
                <Label color="green">Operational</Label>
              </CardBody>
            </Card>
          </Panel>
        </GridItem>
        <GridItem lg={3} md={6} sm={12}>
          <Panel>
            <Card isPlain isFullHeight>
              <CardTitle>Active Users</CardTitle>
              <CardBody>
                <Title headingLevel="h2" size="2xl">
                  1,284
                </Title>
                <Badge>+12% this week</Badge>
              </CardBody>
            </Card>
          </Panel>
        </GridItem>
        <GridItem lg={3} md={6} sm={12}>
          <Panel>
            <Card isPlain isFullHeight>
              <CardTitle>
                <Flex alignItems={{ default: 'alignItemsCenter' }}>
                  <FlexItem>
                    <ExclamationTriangleIcon color="var(--pf-t--global--icon--color--status--warning--default)" />
                  </FlexItem>
                  <FlexItem>Warnings</FlexItem>
                </Flex>
              </CardTitle>
              <CardBody>
                <Title headingLevel="h2" size="2xl">
                  3
                </Title>
                <Label color="orange">Needs attention</Label>
              </CardBody>
            </Card>
          </Panel>
        </GridItem>
        <GridItem lg={3} md={6} sm={12}>
          <Panel>
            <Card isPlain isFullHeight>
              <CardTitle>
                <Flex alignItems={{ default: 'alignItemsCenter' }}>
                  <FlexItem>
                    <InfoCircleIcon color="var(--pf-t--global--icon--color--status--info--default)" />
                  </FlexItem>
                  <FlexItem>Active Tasks</FlexItem>
                </Flex>
              </CardTitle>
              <CardBody>
                <Title headingLevel="h2" size="2xl">
                  42
                </Title>
                <Label color="blue">In progress</Label>
              </CardBody>
            </Card>
          </Panel>
        </GridItem>

        {/* Resource Utilization */}
        <GridItem span={6}>
          <Panel>
            <Card isPlain isFullHeight>
              <CardTitle>Resource Utilization</CardTitle>
              <CardBody>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>CPU Usage</div>
                  <Progress value={45} title="CPU" size={ProgressSize.sm} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>Memory</div>
                  <Progress value={51} title="Memory" size={ProgressSize.sm} variant={ProgressVariant.warning} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>Storage</div>
                  <Progress value={78} title="Storage" size={ProgressSize.sm} variant={ProgressVariant.danger} />
                </div>
                <div>
                  <div style={{ marginBottom: '0.5rem' }}>Network</div>
                  <Progress value={32} title="Network" size={ProgressSize.sm} variant={ProgressVariant.success} />
                </div>
              </CardBody>
            </Card>
          </Panel>
        </GridItem>

        {/* System Information */}
        <GridItem span={6}>
          <Panel>
            <Card isPlain isFullHeight>
              <CardTitle>System Information</CardTitle>
              <CardBody>
                <DescriptionList>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Hostname</DescriptionListTerm>
                    <DescriptionListDescription>prod-server-01</DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>IP Address</DescriptionListTerm>
                    <DescriptionListDescription>192.168.1.100</DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Operating System</DescriptionListTerm>
                    <DescriptionListDescription>Red Hat Enterprise Linux 9.2</DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Uptime</DescriptionListTerm>
                    <DescriptionListDescription>15 days, 7 hours, 23 minutes</DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Last Backup</DescriptionListTerm>
                    <DescriptionListDescription>2 hours ago</DescriptionListDescription>
                  </DescriptionListGroup>
                </DescriptionList>
              </CardBody>
            </Card>
          </Panel>
        </GridItem>
      </Grid>
    </CompassContent>
  </>
);

export { Dashboard };
