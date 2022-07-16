import * as React from 'react';
import {
  Accordion, AccordionItem, AccordionContent, AccordionToggle, Page,
  PageHeader,
  PageSection,
  Gallery,
  GalleryItem,
  PageSectionVariants,
  TextContent,
  Title,
  Label,
  Text,
  Card, CardTitle, CardBody, CardFooter,
  TextVariants } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

const GeneralSettings: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Base Images</Title>
    <TextContent>
        <Text component="p">
          The following base comtainer images were autodetected as used by your applications.
          <br /><br />
        </Text>
      </TextContent>
      <Gallery hasGutter>
        <GalleryItem>
          <Card isHoverable>
            <CardTitle>Red Hat Enterprise Linux 9 UBI</CardTitle>
            <CardBody>RHEL9 UBI Base Image</CardBody>
            <CardFooter>
              <Label color="green">FISMA Low</Label>{' '}
              <Label color="green">FISMA Moderate</Label>{' '}
              <Label color="red">FedRAMP High</Label>{' '}
              <Label color="red">ICD 503</Label>{' '}
            </CardFooter>
          </Card>
        </GalleryItem>
        <GalleryItem>
          <Card isHoverable>
            <CardTitle>NGINX</CardTitle>
            <CardBody>NGINX Web Server</CardBody>
            <CardFooter>
              <Label color="green">FISMA Low</Label>{' '}
              <Label color="red">FISMA Moderate</Label>{' '}
              <Label color="red">FedRAMP High</Label>{' '}
              <Label color="green">ICD 503</Label>{' '}
            </CardFooter>
          </Card>
        </GalleryItem>
      </Gallery>
</PageSection>
);

export { GeneralSettings };
