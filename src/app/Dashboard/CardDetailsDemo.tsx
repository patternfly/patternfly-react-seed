/* eslint-disable camelcase */
import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Title,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Divider,
} from '@patternfly/react-core';

export const CardDetailsDemo: React.FunctionComponent = () => (
  <Card>
    <CardTitle>
      <Title headingLevel="h4" size="xl">
        Details
      </Title>
    </CardTitle>
    <CardBody>
      <DescriptionList>
        <DescriptionListGroup>
          <DescriptionListTerm>Cluster API Address</DescriptionListTerm>
          <DescriptionListDescription>
            <a href="#">https://api1.devcluster.openshift.com</a>
          </DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>Cluster ID</DescriptionListTerm>
          <DescriptionListDescription>63b97ac1-b850-41d9-8820-239becde9e86</DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>Provide</DescriptionListTerm>
          <DescriptionListDescription>AWS</DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>OpenShift Version</DescriptionListTerm>
          <DescriptionListDescription>4.5.0.ci-2020-06-16-015028</DescriptionListDescription>
        </DescriptionListGroup>
        <DescriptionListGroup>
          <DescriptionListTerm>Update Channel</DescriptionListTerm>
          <DescriptionListDescription>stable-4.5</DescriptionListDescription>
        </DescriptionListGroup>
      </DescriptionList>
    </CardBody>
    <Divider />
    <CardFooter>
      <a href="#">View Settings</a>
    </CardFooter>
  </Card>
);
