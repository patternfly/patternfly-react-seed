import * as React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Gallery,
  PageSection,
  Tab,
  TabTitleText,
  Tabs,
  Text,
  TextContent,
  TextVariants,
  Title
} from '@patternfly/react-core';

export interface ISupportProps {
  sampleProp?: string;
}

const Resources: React.FunctionComponent<ISupportProps> = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);
  const [activeCard, setActiveCard] = React.useState(-1);
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);

  const onCloseDrawerClick = () => {
    setIsDrawerExpanded(false);
  };

  const onCardClick = (productId) => {
    if (productId === activeCard) {
      setIsDrawerExpanded(!isDrawerExpanded);
      setActiveCard(-1);
    } else {
      setActiveCard(productId);
      setIsDrawerExpanded(true);
    }
  };

  const handleTabClick = (
    event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };


  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <Title headingLevel="h2" size="xl">
          Details about selected card
        </Title>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseDrawerClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <TextContent>
          <Text component={TextVariants.small}>Sometimes you need small text to display things like date created</Text>
        </TextContent>
        <Tabs
          activeKey={activeTabKey}
          onSelect={handleTabClick}
          aria-label="Tabs in the default example"
          role="region"
        >
          <Tab eventKey={0} title={<TabTitleText>Details1</TabTitleText>} aria-label="Default content - users">
            <TextContent>
              Details1
            </TextContent>
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Details2</TabTitleText>}>
            <TextContent>
              Details2
            </TextContent>
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Details3</TabTitleText>}>
            <TextContent>
              Details3
            </TextContent>
          </Tab>
        </Tabs>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  const drawerContent = (
    <Gallery hasGutter role="region" aria-label="Selectable card container">
      {[1,2,3,4,5,6].map((product) => (
        <Card
          key={`${product}-card`}
          id={`card-view-${product}`}
          variant="secondary"
          isSelectable
        >
          <CardHeader
            selectableActions={{
              selectableActionId: `card-view-select-${product}`,
              selectableActionAriaLabelledby: `card-view-${product}`,
              name: 'card',
              isChecked: product === activeCard,
              variant: 'multiple',
              onChange: () => onCardClick(product)
            }}>
            Test
          </CardHeader>
          <CardTitle>
              Card Title
          </CardTitle>
          <CardBody>
            Card body
          </CardBody>
          <CardFooter>
            Card footer
          </CardFooter>
        </Card>
      ))}
    </Gallery>
  );

  return (
    <React.Fragment>
      <PageSection>
        <TextContent>
          <Text component="h1">Resources</Text>
          <Text component="p">This is a demo that showcases PatternFly Cards.</Text>
        </TextContent>
      </PageSection>
      <PageSection isFilled padding={{ default: 'noPadding' }}>
        <Drawer isExpanded={isDrawerExpanded} className={'pf-m-inline-on-2xl'}>
          <DrawerContent panelContent={panelContent} colorVariant="no-background">
            <DrawerContentBody hasPadding>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </PageSection>
    </React.Fragment>
  );
}


export { Resources };
