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
  Gallery,
  MenuToggle,
  Select,
  SelectList,
  SelectOption,
  Spinner,
  Title,
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import flex from '@patternfly/react-styles/css/utilities/Flex/flex';
import text from '@patternfly/react-styles/css/utilities/Text/text';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/js/l_gallery_GridTemplateColumns_min';

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
    <Gallery hasGutter style={{ [l_gallery_GridTemplateColumns_min.name]: '360px' } as React.CSSProperties}>
      <Card id="card-events-view-example">
        <CardHeader className={flex.alignItemsFlexStart} actions={{ actions: headerActions, hasNoOffset: true }}>
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
                    <ExclamationCircleIcon className={text.dangerColor_100} aria-hidden="true" />
                  </FlexItem>
                  <FlexItem>
                    <span>Readiness probe failed</span>
                  </FlexItem>
                </Flex>
              </DescriptionListTerm>
              <DescriptionListDescription>
                Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect:
                connection refused
              </DescriptionListDescription>
              <DescriptionListDescription>
                <time className={`${text.color_200} ${text.fontSizeSm}`}>Jun 17, 11:02 am</time>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                <Flex flexWrap={{ default: 'nowrap' }}>
                  <FlexItem>
                    <CheckCircleIcon className={text.successColor_100} aria-hidden="true" />
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
                <time className={`${text.color_200} ${text.fontSizeSm}`}>Jun 17, 11:13 am</time>
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
              <DescriptionListDescription>
                Pulling image &quot;openshift/hello-openshift&quot;
              </DescriptionListDescription>
              <DescriptionListDescription>
                <time className={`${text.color_200} ${text.fontSizeSm}`}>Jun 17, 10:59 am</time>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                <Flex flexWrap={{ default: 'nowrap' }}>
                  <FlexItem>
                    <CheckCircleIcon className={text.successColor_100} aria-hidden="true" />
                  </FlexItem>
                  <FlexItem>
                    <span>Created container</span>
                  </FlexItem>
                </Flex>
              </DescriptionListTerm>
              <DescriptionListDescription>Created container hello-openshift</DescriptionListDescription>
              <DescriptionListDescription>
                <time className={`${text.color_200} ${text.fontSizeSm}`}>Jun 17, 10:45 am</time>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                <Flex flexWrap={{ default: 'nowrap' }}>
                  <FlexItem>
                    <ExclamationTriangleIcon className={text.warningColor_100} aria-hidden="true" />
                  </FlexItem>
                  <FlexItem>
                    <span>CPU utilitization over 50%</span>
                  </FlexItem>
                </Flex>
              </DescriptionListTerm>
              <DescriptionListDescription>Migrated 2 pods to other hosts</DescriptionListDescription>
              <DescriptionListDescription>
                <time className={`${text.color_200} ${text.fontSizeSm}`}>Jun 17, 10:33 am</time>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                <Flex flexWrap={{ default: 'nowrap' }}>
                  <FlexItem>
                    <ExclamationCircleIcon className={text.dangerColor_100} aria-hidden="true" />
                  </FlexItem>
                  <FlexItem>
                    <span>Rook-osd-10-328949</span>
                  </FlexItem>
                </Flex>
              </DescriptionListTerm>
              <DescriptionListDescription>Rebuild initiated as Disk 5 failed</DescriptionListDescription>
              <DescriptionListDescription>
                <time className={`${text.color_200} ${text.fontSizeSm}`}>Jun 17, 10:33 am</time>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                <Flex flexWrap={{ default: 'nowrap' }}>
                  <FlexItem>
                    <CheckCircleIcon className={text.successColor_100} aria-hidden="true" />
                  </FlexItem>
                  <FlexItem>
                    <span>Created container</span>
                  </FlexItem>
                </Flex>
              </DescriptionListTerm>
              <DescriptionListDescription>Created container hello-openshift-123</DescriptionListDescription>
              <DescriptionListDescription>
                <time className={`${text.color_200} ${text.fontSizeSm}`}>Jun 17, 10:31 am</time>
              </DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
              <DescriptionListTerm>
                <Flex flexWrap={{ default: 'nowrap' }}>
                  <FlexItem>
                    <CheckCircleIcon className={text.successColor_100} aria-hidden="true" />
                  </FlexItem>
                  <FlexItem>
                    <span>Created container</span>
                  </FlexItem>
                </Flex>
              </DescriptionListTerm>
              <DescriptionListDescription>Created container hello-openshift-456</DescriptionListDescription>
              <DescriptionListDescription>
                <time className={`${text.color_200} ${text.fontSizeSm}`}>Jun 17, 10:30 am</time>
              </DescriptionListDescription>
            </DescriptionListGroup>
          </DescriptionList>
        </CardBody>
        <Divider />
        <CardFooter>
          <a href="#">View all events</a>
        </CardFooter>
      </Card>
    </Gallery>
  );
};
