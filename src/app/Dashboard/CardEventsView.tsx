/* eslint-disable camelcase */
import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Divider,
  Flex,
  FlexItem,
  Icon,
  MenuToggle,
  Select,
  SelectList,
  SelectOption,
  Spinner,
  Timestamp,
  TimestampFormat,
  Title,
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';

export const CardEventsView: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const selectItems = (
    <SelectList>
      <SelectOption value="Success" key="option1">
        Success
      </SelectOption>
      <SelectOption value="Error" key="option2">
        Error
      </SelectOption>
      <SelectOption value="Warning" key="option3">
        Error
      </SelectOption>
    </SelectList>
  );

  const toggle = (toggleRef) => (
    <MenuToggle ref={toggleRef} onClick={() => setIsOpen(!isOpen)} isExpanded={isOpen} variant="plainText">
      Status
    </MenuToggle>
  );

  const headerActions = (
    <Select onSelect={() => setIsOpen(!isOpen)} onOpenChange={setIsOpen} isOpen={isOpen} toggle={toggle}>
      {selectItems}
    </Select>
  );
  return (
    <Card id="card-events-view-example">
      <CardHeader actions={{ actions: headerActions, hasNoOffset: true }}>
        <CardTitle>
          <Title headingLevel="h4" size="xl" style={{ paddingTop: '3px' }}>
            Events
          </Title>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <DescriptionList>
          <DescriptionListGroup>
            <DescriptionListTerm>
              <Flex flexWrap={{ default: 'nowrap' }}>
                <FlexItem>
                  <Icon status="danger">
                    <ExclamationCircleIcon aria-hidden="true" />
                  </Icon>
                </FlexItem>
                <FlexItem>
                  <span>Readiness probe failed</span>
                </FlexItem>
              </Flex>
            </DescriptionListTerm>
            <DescriptionListDescription>
              Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect: connection
              refused
            </DescriptionListDescription>
            <DescriptionListDescription>
              <Timestamp
                date={new Date('2023-06-17T14:02:00Z')}
                dateFormat={TimestampFormat.medium}
                timeFormat={TimestampFormat.short}
              >
                Jun 17, 11:02 am
              </Timestamp>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>
              <Flex flexWrap={{ default: 'nowrap' }}>
                <FlexItem>
                  <Icon status="success">
                    <CheckCircleIcon aria-hidden="true" />
                  </Icon>
                </FlexItem>
                <FlexItem>
                  <span>Successful assignment</span>
                </FlexItem>
              </Flex>
            </DescriptionListTerm>
            <DescriptionListDescription>
              Successfully assigned default/example to ip-10-0-130-149.ec2.internal
            </DescriptionListDescription>
            <DescriptionListDescription>
              <Timestamp
                date={new Date('2023-06-17T14:13:00Z')}
                dateFormat={TimestampFormat.medium}
                timeFormat={TimestampFormat.short}
              >
                Jun 17, 11:13 am
              </Timestamp>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>
              <Flex flexWrap={{ default: 'nowrap' }}>
                <FlexItem>
                  <Spinner size="md" aria-label="loading spinner" />
                </FlexItem>
                <FlexItem>
                  <span>Pulling image</span>
                </FlexItem>
              </Flex>
            </DescriptionListTerm>
            <DescriptionListDescription>Pulling image &quot;openshift/hello-openshift&quot;</DescriptionListDescription>
            <DescriptionListDescription>
              <Timestamp
                date={new Date('2023-06-17T13:59:00Z')}
                dateFormat={TimestampFormat.medium}
                timeFormat={TimestampFormat.short}
              >
                Jun 17, 10:59 am
              </Timestamp>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>
              <Flex flexWrap={{ default: 'nowrap' }}>
                <FlexItem>
                  <Icon status="success">
                    <CheckCircleIcon aria-hidden="true" />
                  </Icon>
                </FlexItem>
                <FlexItem>
                  <span>Created container</span>
                </FlexItem>
              </Flex>
            </DescriptionListTerm>
            <DescriptionListDescription>Created container hello-openshift</DescriptionListDescription>
            <DescriptionListDescription>
              <Timestamp
                date={new Date('2023-06-17T13:45:00Z')}
                dateFormat={TimestampFormat.medium}
                timeFormat={TimestampFormat.short}
              >
                Jun 17, 10:45 am
              </Timestamp>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>
              <Flex flexWrap={{ default: 'nowrap' }}>
                <FlexItem>
                  <Icon status="warning">
                    <ExclamationTriangleIcon aria-hidden="true" />
                  </Icon>
                </FlexItem>
                <FlexItem>
                  <span>CPU utilitization over 50%</span>
                </FlexItem>
              </Flex>
            </DescriptionListTerm>
            <DescriptionListDescription>Migrated 2 pods to other hosts</DescriptionListDescription>
            <DescriptionListDescription>
              <Timestamp
                date={new Date('2023-06-17T13:33:00Z')}
                dateFormat={TimestampFormat.medium}
                timeFormat={TimestampFormat.short}
              >
                Jun 17, 10:33 am
              </Timestamp>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>
              <Flex flexWrap={{ default: 'nowrap' }}>
                <FlexItem>
                  <Icon status="danger">
                    <ExclamationCircleIcon aria-hidden="true" />
                  </Icon>
                </FlexItem>
                <FlexItem>
                  <span>Rook-osd-10-328949</span>
                </FlexItem>
              </Flex>
            </DescriptionListTerm>
            <DescriptionListDescription>Rebuild initiated as Disk 5 failed</DescriptionListDescription>
            <DescriptionListDescription>
              <Timestamp
                date={new Date('2023-06-17T13:33:00Z')}
                dateFormat={TimestampFormat.medium}
                timeFormat={TimestampFormat.short}
              >
                Jun 17, 10:33 am
              </Timestamp>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>
              <Flex flexWrap={{ default: 'nowrap' }}>
                <FlexItem>
                  <Icon status="success">
                    <CheckCircleIcon aria-hidden="true" />
                  </Icon>
                </FlexItem>
                <FlexItem>
                  <span>Created container</span>
                </FlexItem>
              </Flex>
            </DescriptionListTerm>
            <DescriptionListDescription>Created container hello-openshift-123</DescriptionListDescription>
            <DescriptionListDescription>
              <Timestamp
                date={new Date('2023-06-17T13:31:00Z')}
                dateFormat={TimestampFormat.medium}
                timeFormat={TimestampFormat.short}
              >
                Jun 17, 10:31 am
              </Timestamp>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>
              <Flex flexWrap={{ default: 'nowrap' }}>
                <FlexItem>
                  <Icon status="success">
                    <CheckCircleIcon aria-hidden="true" />
                  </Icon>
                </FlexItem>
                <FlexItem>
                  <span>Created container</span>
                </FlexItem>
              </Flex>
            </DescriptionListTerm>
            <DescriptionListDescription>Created container hello-openshift-456</DescriptionListDescription>
            <DescriptionListDescription>
              <Timestamp
                date={new Date('2023-06-17T13:30:00Z')}
                dateFormat={TimestampFormat.medium}
                timeFormat={TimestampFormat.short}
              >
                Jun 17, 10:30 am
              </Timestamp>
            </DescriptionListDescription>
          </DescriptionListGroup>
        </DescriptionList>
      </CardBody>
      <Divider />
      <CardFooter>
        <a href="#">View all events</a>
      </CardFooter>
    </Card>
  );
};
