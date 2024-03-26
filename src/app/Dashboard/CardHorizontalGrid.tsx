import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardExpandableContent,
  CardHeader,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownList,
  Flex,
  FlexItem,
  Grid,
  Icon,
  Label,
  LabelGroup,
  Level,
  MenuToggle,
  MenuToggleElement,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-v-icon';
import OnIcon from '@patternfly/react-icons/dist/js/icons/on-icon';
import PortIcon from '@patternfly/react-icons/dist/js/icons/port-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import AutomationIcon from '@patternfly/react-icons/dist/js/icons/automation-icon';

export const CardHorizontalGrid: React.FunctionComponent = () => {
  const [isCardExpanded, setIsCardExpanded] = React.useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const onCardExpand = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  const onActionToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onActionSelect = () => {
    setIsDropdownOpen(false);
  };

  const dropdownItems = (
    <>
      <DropdownItem key="action1">Action 1</DropdownItem>
      <DropdownItem key="action2">Action 2</DropdownItem>
      <DropdownItem key="disabled action3" isDisabled>
        Disabled Action 3
      </DropdownItem>
      <DropdownItem key="action4">Action 4</DropdownItem>
    </>
  );
  const headerActions = (
    <Dropdown
      onSelect={onActionSelect}
      isOpen={isDropdownOpen}
      popperProps={{ position: 'right' }}
      onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          isExpanded={isDropdownOpen}
          onClick={onActionToggle}
          variant="plain"
          aria-label="Horizontal card grid demo kebab toggle"
        >
          <EllipsisVIcon aria-hidden="true" />
        </MenuToggle>
      )}
    >
      <DropdownList>{dropdownItems}</DropdownList>
    </Dropdown>
  );

  return (
    <Card id="horizontal card" isExpanded={isCardExpanded}>
      <CardHeader
        actions={{ actions: headerActions }}
        onExpand={onCardExpand}
        toggleButtonProps={{
          id: 'toggle-button',
          'aria-label': 'Actions',
          'aria-labelledby': 'titleId toggle-button',
          'aria-expanded': isCardExpanded,
        }}
      >
        {isCardExpanded && <CardTitle id="titleId">Improve recommended pathways</CardTitle>}
        {!isCardExpanded && (
          <Level hasGutter>
            <CardTitle id="titleId">Improve recommended pathways</CardTitle>
            <LabelGroup isCompact>
              <Label variant="outline" icon={<PortIcon />} color="blue">
                Performance
              </Label>
              <Label isCompact icon={<InfoCircleIcon />} color="purple">
                Stability
              </Label>
              <Label isCompact icon={<InfoCircleIcon />} color="green">
                Availability
              </Label>
            </LabelGroup>
          </Level>
        )}
      </CardHeader>
      <CardExpandableContent>
        <CardBody>
          <Grid md={6} lg={4} hasGutter>
            <Flex
              spaceItems={{ default: 'spaceItemsLg' }}
              alignItems={{ default: 'alignItemsFlexStart' }}
              direction={{ default: 'column' }}
            >
              <Flex
                spaceItems={{ default: 'spaceItemsSm' }}
                alignItems={{ default: 'alignItemsFlexStart' }}
                direction={{ default: 'column' }}
                grow={{ default: 'grow' }}
              >
                <Label variant="outline" icon={<PortIcon />} color="blue">
                  Performance
                </Label>
                <a href="#">378 systems</a>
                <TextContent>
                  <Text component={TextVariants.p}>
                    Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network instabilities
                    and issues with system performance
                  </Text>
                </TextContent>
                <Flex
                  grow={{ default: 'grow' }}
                  direction={{ default: 'column', lg: 'row' }}
                  justifyContent={{ default: 'justifyContentFlexEnd', lg: 'justifyContentFlexStart' }}
                  alignContent={{ lg: 'alignContentFlexEnd' }}
                  rowGap={{ default: 'rowGapMd' }}
                >
                  <FlexItem style={{ marginBlockEnd: '-.25em' }}>
                    <Label color="red">Incident</Label>
                  </FlexItem>
                  <Flex
                    alignItems={{ default: 'alignItemsCenter' }}
                    spaceItems={{ default: 'spaceItemsSm' }}
                    flexWrap={{ default: 'nowrap' }}
                    rowGap={{ default: 'rowGapMd' }}
                  >
                    <Icon style={{ lineHeight: '1' }}>
                      <OnIcon />
                    </Icon>
                    <TextContent>
                      <Text component={TextVariants.p} style={{ color: 'var(--pf-t--global--text--color--subtle)' }}>
                        System reboot
                        <b> is not</b> required
                      </Text>
                    </TextContent>
                  </Flex>
                </Flex>
              </Flex>
              <Button href="#" component="a" variant="link" isInline icon={<ArrowRightIcon />} iconPosition="right">
                View pathway
              </Button>
            </Flex>
            <Flex
              spaceItems={{ default: 'spaceItemsLg' }}
              alignItems={{ default: 'alignItemsFlexStart' }}
              direction={{ default: 'column' }}
            >
              <Flex
                spaceItems={{ default: 'spaceItemsSm' }}
                alignItems={{ default: 'alignItemsFlexStart' }}
                direction={{ default: 'column' }}
                grow={{ default: 'grow' }}
              >
                <Label variant="outline" icon={<CubeIcon />} color="blue">
                  Stability
                </Label>
                <a href="#">211 systems</a>
                <TextContent>
                  <Text component={TextVariants.p}>
                    Adjust your networking configuration to get ahead of network perfomance degradations and packet
                    losses
                  </Text>
                </TextContent>
                <Flex
                  grow={{ default: 'grow' }}
                  direction={{ default: 'column', lg: 'row' }}
                  justifyContent={{ default: 'justifyContentFlexEnd', lg: 'justifyContentFlexStart' }}
                  alignContent={{ lg: 'alignContentFlexEnd' }}
                  rowGap={{ default: 'rowGapMd' }}
                >
                  <Flex
                    alignItems={{ default: 'alignItemsCenter' }}
                    spaceItems={{ default: 'spaceItemsSm' }}
                    flexWrap={{ default: 'nowrap' }}
                    rowGap={{ default: 'rowGapMd' }}
                  >
                    <Icon status="danger" style={{ lineHeight: '1' }}>
                      <OnIcon />
                    </Icon>
                    <TextContent>
                      <Text component={TextVariants.p} style={{ color: 'var(--pf-t--global--text--color--subtle)' }}>
                        System reboot
                        <b> is</b> required
                      </Text>
                    </TextContent>
                  </Flex>
                </Flex>
              </Flex>
              <Button href="#" component="a" variant="link" isInline icon={<ArrowRightIcon />} iconPosition="right">
                View pathway
              </Button>
            </Flex>
            <Flex
              spaceItems={{ default: 'spaceItemsLg' }}
              alignItems={{ default: 'alignItemsFlexStart' }}
              direction={{ default: 'column' }}
            >
              <Flex
                spaceItems={{ default: 'spaceItemsSm' }}
                alignItems={{ default: 'alignItemsFlexStart' }}
                direction={{ default: 'column' }}
                grow={{ default: 'grow' }}
              >
                <Label variant="outline" icon={<AutomationIcon />} color="blue">
                  Availability
                </Label>
                <a href="#">166 systems</a>
                <TextContent>
                  <Text component={TextVariants.p}>
                    Fine tune your Oracle DB configuration to improve database performance and avoid process failure
                  </Text>
                </TextContent>
                <Flex
                  grow={{ default: 'grow' }}
                  direction={{ default: 'column', lg: 'row' }}
                  justifyContent={{ default: 'justifyContentFlexEnd', lg: 'justifyContentFlexStart' }}
                  alignContent={{ lg: 'alignContentFlexEnd' }}
                  rowGap={{ default: 'rowGapMd' }}
                >
                  <FlexItem style={{ marginBlockEnd: '-.25em' }}>
                    <Label color="red">Incident</Label>
                  </FlexItem>
                  <Flex
                    alignItems={{ default: 'alignItemsCenter' }}
                    spaceItems={{ default: 'spaceItemsSm' }}
                    flexWrap={{ default: 'nowrap' }}
                    rowGap={{ default: 'rowGapMd' }}
                  >
                    <Icon style={{ lineHeight: '1' }}>
                      <OnIcon />
                    </Icon>
                    <TextContent>
                      <Text component={TextVariants.p} style={{ color: 'var(--pf-t--global--text--color--subtle)' }}>
                        System reboot
                        <b> is not</b> required
                      </Text>
                    </TextContent>
                  </Flex>
                </Flex>
              </Flex>
              <Button href="#" component="a" variant="link" isInline icon={<ArrowRightIcon />} iconPosition="right">
                View pathway
              </Button>
            </Flex>
          </Grid>
        </CardBody>
      </CardExpandableContent>
    </Card>
  );
};
