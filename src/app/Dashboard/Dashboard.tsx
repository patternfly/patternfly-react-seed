import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import {
  Page,
  SkipToContent,
  Button,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  Brand,
  MastheadContent,
  Toolbar,
  ToolbarContent,
  // ToolbarContentSection,
  ToolbarGroup,
  ToolbarItem,
  Avatar,
  // MenuToggleIcon,
  // MenuToggleText,
  // MenuToggleControls,
  PageSidebar,
  PageSidebarBody,
  Nav,
  NavList,
  NavItem,
  // NavLink,
  // PageMain,
  // PageMainBody,
  // PageMainBreadcrumb,
  Breadcrumb,
  // BreadcrumbList,
  BreadcrumbItem,
  // BreadcrumbLink,
  // BreadcrumbItemDivider,
  // PageMainSection,
  // PageMainBody,
  // Content,
  Card,
  CardHeader,
  // CardHeaderToggle,
  // PageMainSection,
  // PageMainBody,
  Icon,
  MenuToggle,
  Divider,
  Flex,
  FlexItem,
  Dropdown,
  MenuToggleElement,
  DropdownList,
  DropdownItem,
  Grid,
  CardTitle,
  CardExpandableContent,
  CardBody,
  LabelGroup,
  Label,
  CardFooter,
} from '@patternfly/react-core';
import { BarsIcon } from '@patternfly/react-icons';
import ThIcon from '@patternfly/react-icons/dist/js/icons/th-icon';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/js/icons/question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-v-icon';
import UserIcon from '@patternfly/react-icons/dist/js/icons/user-icon';
import PortIcon from '@patternfly/react-icons/dist/js/icons/port-icon';
import OnIcon from '@patternfly/react-icons/dist/js/icons/on-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';

// Delete these vars after defining
const onSelect = () => {
  console.log('selected');
};
let isOpen = false;
const setIsOpen = (x) => (isOpen = !isOpen);
const isToggleRightAligned = false;
const onExpand = () => {
  console.log('expanded');
};
const isExpanded = true;

const headerActions = (
  <>
    <Dropdown
      onSelect={onSelect}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          isExpanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          variant="plain"
          aria-label="Actions"
          id="dashboard-demo-expandable-status-card-1-dropdown-kebab-right-aligned-button"
        >
          <EllipsisVIcon aria-hidden="true" />
        </MenuToggle>
      )}
      isOpen={isOpen}
      onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
    >
      <DropdownList>
        <DropdownItem key="link" to="#" onClick={(event: any) => event.preventDefault()}>
          Link
        </DropdownItem>
        <DropdownItem key="action">Action</DropdownItem>
        <DropdownItem key="disabled link" isDisabled to="#" onClick={(event: any) => event.preventDefault()}>
          Disabled Link
        </DropdownItem>
        <DropdownItem key="disabled action" isDisabled>
          Disabled Action
        </DropdownItem>
        <Divider component="li" key="separator" />
        <DropdownItem key="separated action">Separated Action</DropdownItem>
        <DropdownItem key="separated link" to="#" onClick={(event: any) => event.preventDefault()}>
          Separated Link
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  </>
);

const Dashboard: React.FunctionComponent = () => (
  <PageSection isWidthLimited>
    <Grid hasGutter>
      <Card isExpanded={isExpanded}>
        <CardHeader
          actions={{ actions: headerActions }}
          onExpand={onExpand}
          isToggleRightAligned={isToggleRightAligned}
          toggleButtonProps={{
            id: 'dashboard-demo-expandable-status-card-1-toggle',
            'aria-label': 'Details',
            'aria-labelledby':
              'dashboard-demo-expandable-status-card-1-title dashboard-demo-expandable-status-card-1-toggle',
            'aria-expanded': isExpanded,
          }}
        >
          <CardTitle id="dashboard-demo-expandable-status-card-1-title">Improve recommended pathways</CardTitle>
        </CardHeader>
        <CardExpandableContent>
          <Flex direction={{ default: 'column', md: 'row' }}>
            <Flex
              flex={{ default: 'flex_1' }}
              alignSelf={{ default: 'alignSelfStretch' }}
              alignItems={{ default: 'alignItemsStretch' }}
            >
              <Card isPlain>
                <CardBody>
                  <Flex
                    className="pf-v5-u-h-110"
                    direction={{ default: 'column' }}
                    spaceItems={{ default: 'spaceItemsSm' }}
                  >
                    <Flex
                      spaceItems={{ default: 'spaceItemsSm' }}
                      direction={{ md: 'column', lg: 'row' }}
                      spacer={{ md: 'spacerMd', lg: 'spacerSm' }}
                    >
                      <LabelGroup>
                        <Label icon={<PortIcon />} color="blue">
                          Performance
                        </Label>
                      </LabelGroup>
                      <a href="#">378 systems</a>
                    </Flex>
                    <FlexItem spacer={{ default: 'spacerMd' }}>
                      <p>
                        Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network
                        instabilities and issues with system performance
                      </p>
                    </FlexItem>
                    <Flex
                      grow={{ default: 'grow' }}
                      direction={{ default: 'column', lg: 'row' }}
                      justifyContent={{ default: 'justifyContentFlexEnd', lg: 'justifyContentFlexStart' }}
                      alignContent={{ lg: 'alignContentFlexEnd' }}
                      style={{ rowGap: 'var(--pf-v5-global--spacer--md);' }}
                    >
                      <FlexItem style={{ marginBlockEnd: '-.25em' }}>
                        <Label color="red">Incident</Label>
                      </FlexItem>
                      <Flex
                        alignItems={{ default: 'alignItemsCenter' }}
                        spaceItems={{ default: 'spaceItemsSm' }}
                        flexWrap={{ default: 'nowrap' }}
                        style={{ rowGap: 'var(--pf-v5-global--spacer--md);' }}
                      >
                        <Icon className="pf-v5-u-color-400" style={{ lineHeight: '1' }}>
                          <OnIcon />
                        </Icon>
                        <p className="pf-v5-u-color-200">
                          System reboot
                          <b className="pf-v5-u-color-100">is not</b> required
                        </p>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
                <CardFooter>
                  <Button component="a" href="#" variant="link" isInline icon={<ArrowRightIcon />} iconPosition="end">
                    View pathway
                  </Button>
                </CardFooter>
              </Card>
            </Flex>
            <Divider orientation={{ md: 'vertical' }} inset={{ default: 'inset3xl' }} />
            <Flex
              flex={{ default: 'flex_1' }}
              alignSelf={{ default: 'alignSelfStretch' }}
              alignItems={{ default: 'alignItemsStretch' }}
            >
              <Card isPlain>
                <CardBody>
                  <Flex
                    className="pf-v5-u-h-110"
                    direction={{ default: 'column' }}
                    spaceItems={{ default: 'spaceItemsSm' }}
                  >
                    <Flex
                      spaceItems={{ default: 'spaceItemsSm' }}
                      direction={{ md: 'column', lg: 'row' }}
                      spacer={{ md: 'spacerMd', lg: 'spacerSm' }}
                    >
                      <LabelGroup>
                        <Label icon={<PortIcon />} color="blue">
                          Performance
                        </Label>
                      </LabelGroup>
                      <a href="#">378 systems</a>
                    </Flex>
                    <FlexItem spacer={{ default: 'spacerMd' }}>
                      <p>
                        Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network
                        instabilities and issues with system performance
                      </p>
                    </FlexItem>
                    <Flex
                      grow={{ default: 'grow' }}
                      direction={{ default: 'column', lg: 'row' }}
                      justifyContent={{ default: 'justifyContentFlexEnd', lg: 'justifyContentFlexStart' }}
                      alignContent={{ lg: 'alignContentFlexEnd' }}
                      style={{ rowGap: 'var(--pf-v5-global--spacer--md);' }}
                    >
                      <FlexItem style={{ marginBlockEnd: '-.25em' }}>
                        <Label color="red">Incident</Label>
                      </FlexItem>
                      <Flex
                        alignItems={{ default: 'alignItemsCenter' }}
                        spaceItems={{ default: 'spaceItemsSm' }}
                        flexWrap={{ default: 'nowrap' }}
                        style={{ rowGap: 'var(--pf-v5-global--spacer--md);' }}
                      >
                        <Icon className="pf-v5-u-color-400" style={{ lineHeight: '1' }}>
                          <OnIcon />
                        </Icon>
                        <p className="pf-v5-u-color-200">
                          System reboot
                          <b className="pf-v5-u-color-100">is not</b> required
                        </p>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
                <CardFooter>
                  <Button component="a" href="#" variant="link" isInline icon={<ArrowRightIcon />} iconPosition="end">
                    View pathway
                  </Button>
                </CardFooter>
              </Card>
            </Flex>
            <Divider orientation={{ md: 'vertical' }} inset={{ default: 'inset3xl' }} />
            <Flex
              flex={{ default: 'flex_1' }}
              alignSelf={{ default: 'alignSelfStretch' }}
              alignItems={{ default: 'alignItemsStretch' }}
            >
              <Card isPlain>
                <CardBody>
                  <Flex
                    className="pf-v5-u-h-110"
                    direction={{ default: 'column' }}
                    spaceItems={{ default: 'spaceItemsSm' }}
                  >
                    <Flex
                      spaceItems={{ default: 'spaceItemsSm' }}
                      direction={{ md: 'column', lg: 'row' }}
                      spacer={{ md: 'spacerMd', lg: 'spacerSm' }}
                    >
                      <LabelGroup>
                        <Label icon={<PortIcon />} color="blue">
                          Performance
                        </Label>
                      </LabelGroup>
                      <a href="#">378 systems</a>
                    </Flex>
                    <FlexItem spacer={{ default: 'spacerMd' }}>
                      <p>
                        Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network
                        instabilities and issues with system performance
                      </p>
                    </FlexItem>
                    <Flex
                      grow={{ default: 'grow' }}
                      direction={{ default: 'column', lg: 'row' }}
                      justifyContent={{ default: 'justifyContentFlexEnd', lg: 'justifyContentFlexStart' }}
                      alignContent={{ lg: 'alignContentFlexEnd' }}
                      style={{ rowGap: 'var(--pf-v5-global--spacer--md);' }}
                    >
                      <FlexItem style={{ marginBlockEnd: '-.25em' }}>
                        <Label color="red">Incident</Label>
                      </FlexItem>
                      <Flex
                        alignItems={{ default: 'alignItemsCenter' }}
                        spaceItems={{ default: 'spaceItemsSm' }}
                        flexWrap={{ default: 'nowrap' }}
                        style={{ rowGap: 'var(--pf-v5-global--spacer--md);' }}
                      >
                        <Icon className="pf-v5-u-color-400" style={{ lineHeight: '1' }}>
                          <OnIcon />
                        </Icon>
                        <p className="pf-v5-u-color-200">
                          System reboot
                          <b className="pf-v5-u-color-100">is not</b> required
                        </p>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
                <CardFooter>
                  <Button component="a" href="#" variant="link" isInline icon={<ArrowRightIcon />} iconPosition="end">
                    View pathway
                  </Button>
                </CardFooter>
              </Card>
            </Flex>
          </Flex>
        </CardExpandableContent>
      </Card>
    </Grid>
  </PageSection>
);

// TODO:
// add isExpanded state for Card
// swap <p> with <Text>

// <main
//   class="pf-v5-c-page__main"
//   tabindex="-1"
//   id="main-content-dashboard-demo"
// >
//   <section class="pf-v5-c-page__main-section pf-m-limit-width">
//     <div class="pf-v5-c-page__main-body">
//       <div class="pf-v5-l-grid pf-m-gutter">
//         <div class="pf-v5-c-card pf-m-expanded">

//           <div class="pf-v5-c-card__expandable-content">
//             <div class="pf-v5-l-flex pf-m-column pf-m-row-on-md">
//               <div
//                 class="pf-v5-l-flex pf-m-flex-1 pf-m-align-self-stretch pf-m-align-items-stretch"
//               >
//                 <div class="pf-v5-c-card pf-m-plain">
//                   <div class="pf-v5-c-card__body">
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-v5-u-h-100 pf-m-space-items-sm"
//                     >
//                       <div
//                         class="pf-v5-l-flex pf-m-space-items-sm pf-m-column-on-md pf-m-row-on-lg pf-m-spacer-md-on-md pf-m-spacer-sm-on-lg"
//                       >
//                         <div class="pf-v5-c-label-group">
//                           <div class="pf-v5-c-label-group__main">
//                             <ul
//                               class="pf-v5-c-label-group__list"
//                               role="list"
//                               aria-label="Group of labels"
//                             >
//                               <li class="pf-v5-c-label-group__list-item">
//                                 <span
//                                   class="pf-v5-c-label pf-m-outline pf-m-blue"
//                                 >
//                                   <span class="pf-v5-c-label__content">
//                                     <span class="pf-v5-c-label__icon">
//                                       <i
//                                         class="pf-v5-pficon pf-v5-pficon-port"
//                                         aria-hidden="true"
//                                       ></i>
//                                     </span>
//                                     <span
//                                       class="pf-v5-c-label__text"
//                                     >Performance</span>
//                                   </span>
//                                 </span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <a href="#">378 systems</a>
//                       </div>
//                       <div class="pf-v5-l-flex__item pf-m-spacer-md">
//                         <p>Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network instabilities and issues with system performance</p>
//                       </div>
//                       <div
//                         class="pf-v5-l-flex pf-m-grow pf-m-column pf-m-row-on-lg pf-m-justify-content-flex-end pf-m-justify-content-flex-start-on-lg pf-m-align-content-flex-end-on-lg"
//                         style="row-gap: var(--pf-v5-global--spacer--md);"
//                       >
//                         <div
//                           class="pf-v5-l-flex__item"
//                           style="margin-block-end: -.25em"
//                         >
//                           <span class="pf-v5-c-label pf-m-red">
//                             <span class="pf-v5-c-label__content">
//                               <span class="pf-v5-c-label__text">Incident</span>
//                             </span>
//                           </span>
//                         </div>
//                         <div
//                           class="pf-v5-l-flex pf-m-space-items-sm pf-m-align-items-center pf-m-nowrap"
//                           style="row-gap: var(--pf-v5-global--spacer--md);"
//                         >
//                           <i
//                             class="pf-v5-pficon pf-v5-pficon-on pf-v5-u-color-400"
//                             style="line-height: 1"
//                             aria-hidden="true"
//                           ></i>
//                           <p class="pf-v5-u-color-200">
//                             System reboot
//                             <b class="pf-v5-u-color-100">is not</b> required
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="pf-v5-c-card__footer">
//                     <a class="pf-v5-c-button pf-m-link pf-m-inline" href="#">
//                       View pathway
//                       <span class="pf-v5-c-button__icon pf-m-end">
//                         <i class="fas fa-arrow-right" aria-hidden="true"></i>
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <hr class="pf-v5-c-divider pf-m-vertical-on-md pf-m-inset-3xl" />
//               <div
//                 class="pf-v5-l-flex pf-m-flex-1 pf-m-align-self-stretch pf-m-align-items-stretch"
//               >
//                 <div class="pf-v5-c-card pf-m-plain">
//                   <div class="pf-v5-c-card__body">
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-v5-u-h-100 pf-m-space-items-sm"
//                     >
//                       <div
//                         class="pf-v5-l-flex pf-m-space-items-sm pf-m-column-on-md pf-m-row-on-lg pf-m-spacer-md-on-md pf-m-spacer-sm-on-lg"
//                       >
//                         <div class="pf-v5-c-label-group">
//                           <div class="pf-v5-c-label-group__main">
//                             <ul
//                               class="pf-v5-c-label-group__list"
//                               role="list"
//                               aria-label="Group of labels"
//                             >
//                               <li class="pf-v5-c-label-group__list-item">
//                                 <span
//                                   class="pf-v5-c-label pf-m-outline pf-m-blue"
//                                 >
//                                   <span class="pf-v5-c-label__content">
//                                     <span class="pf-v5-c-label__icon">
//                                       <i
//                                         class="fas fa-cube"
//                                         aria-hidden="true"
//                                       ></i>
//                                     </span>
//                                     <span
//                                       class="pf-v5-c-label__text"
//                                     >Stablility</span>
//                                   </span>
//                                 </span>
//                               </li>
//                               <li class="pf-v5-c-label-group__list-item">
//                                 <button
//                                   class="pf-v5-c-label pf-m-overflow"
//                                   type="button"
//                                 >
//                                   <span class="pf-v5-c-label__content">
//                                     <span class="pf-v5-c-label__text">1 more</span>
//                                   </span>
//                                 </button>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <a href="#">211 systems</a>
//                       </div>
//                       <div class="pf-v5-l-flex__item pf-m-spacer-md">
//                         <p>Adjust your networking configuration to get ahead of network perfomance degradations and packet losses</p>
//                       </div>
//                       <div
//                         class="pf-v5-l-flex pf-m-grow pf-m-column pf-m-row-on-lg pf-m-justify-content-flex-end pf-m-justify-content-flex-start-on-lg pf-m-align-content-flex-end-on-lg"
//                         style="row-gap: var(--pf-v5-global--spacer--md);"
//                       >
//                         <div
//                           class="pf-v5-l-flex pf-m-space-items-sm pf-m-align-items-center pf-m-nowrap"
//                           style="row-gap: var(--pf-v5-global--spacer--md);"
//                         >
//                           <i
//                             class="pf-v5-pficon pf-v5-pficon-on pf-v5-u-danger-color-100"
//                             style="line-height: 1"
//                             aria-hidden="true"
//                           ></i>
//                           <p class="pf-v5-u-color-200">
//                             System reboot
//                             <b class="pf-v5-u-color-100">is</b> required
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="pf-v5-c-card__footer">
//                     <a class="pf-v5-c-button pf-m-link pf-m-inline" href="#">
//                       View pathway
//                       <span class="pf-v5-c-button__icon pf-m-end">
//                         <i class="fas fa-arrow-right" aria-hidden="true"></i>
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <hr class="pf-v5-c-divider pf-m-vertical-on-md pf-m-inset-3xl" />
//               <div
//                 class="pf-v5-l-flex pf-m-flex-1 pf-m-align-self-stretch pf-m-align-items-stretch"
//               >
//                 <div class="pf-v5-c-card pf-m-plain">
//                   <div class="pf-v5-c-card__body">
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-v5-u-h-100 pf-m-space-items-sm"
//                     >
//                       <div
//                         class="pf-v5-l-flex pf-m-space-items-sm pf-m-column-on-md pf-m-row-on-lg pf-m-spacer-md-on-md pf-m-spacer-sm-on-lg"
//                       >
//                         <div class="pf-v5-c-label-group">
//                           <div class="pf-v5-c-label-group__main">
//                             <ul
//                               class="pf-v5-c-label-group__list"
//                               role="list"
//                               aria-label="Group of labels"
//                             >
//                               <li class="pf-v5-c-label-group__list-item">
//                                 <span
//                                   class="pf-v5-c-label pf-m-outline pf-m-blue"
//                                 >
//                                   <span class="pf-v5-c-label__content">
//                                     <span class="pf-v5-c-label__icon">
//                                       <i
//                                         class="pf-v5-pficon pf-v5-pficon-automation"
//                                         aria-hidden="true"
//                                       ></i>
//                                     </span>
//                                     <span
//                                       class="pf-v5-c-label__text"
//                                     >Availability</span>
//                                   </span>
//                                 </span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                         <a href="#">166 systems</a>
//                       </div>
//                       <div class="pf-v5-l-flex__item pf-m-spacer-md">
//                         <p>Fine tune your Oracle DB configuration to improve database performance and avoid process failure</p>
//                       </div>
//                       <div
//                         class="pf-v5-l-flex pf-m-grow pf-m-column pf-m-row-on-lg pf-m-justify-content-flex-end pf-m-justify-content-flex-start-on-lg pf-m-align-content-flex-end-on-lg"
//                         style="row-gap: var(--pf-v5-global--spacer--md);"
//                       >
//                         <div
//                           class="pf-v5-l-flex__item"
//                           style="margin-block-end: -.25em"
//                         >
//                           <span class="pf-v5-c-label pf-m-red">
//                             <span class="pf-v5-c-label__content">
//                               <span class="pf-v5-c-label__text">Incident</span>
//                             </span>
//                           </span>
//                         </div>
//                         <div
//                           class="pf-v5-l-flex pf-m-space-items-sm pf-m-align-items-center pf-m-nowrap"
//                           style="row-gap: var(--pf-v5-global--spacer--md);"
//                         >
//                           <i
//                             class="pf-v5-pficon pf-v5-pficon-on pf-v5-u-color-400"
//                             style="line-height: 1"
//                             aria-hidden="true"
//                           ></i>
//                           <p class="pf-v5-u-color-200">
//                             System reboot
//                             <b class="pf-v5-u-color-100">is not</b> required
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="pf-v5-c-card__footer">
//                     <a class="pf-v5-c-button pf-m-link pf-m-inline" href="#">
//                       View pathway
//                       <span class="pf-v5-c-button__icon pf-m-end">
//                         <i class="fas fa-arrow-right" aria-hidden="true"></i>
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           class="pf-v5-l-grid__item pf-m-gutter pf-m-4-col-on-lg pf-m-6-col-on-2xl"
//           style="--pf-v5-l-grid--item--Order-on-lg:3"
//         >
//           <div class="pf-v5-l-flex pf-m-column">
//             <div
//               class="pf-v5-c-card pf-m-expanded"
//               id="dashboard-demo-status-card-1"
//             >
//               <div class="pf-v5-c-card__header">
//                 <h2 class="pf-v5-c-title pf-m-xl">Status</h2>
//               </div>
//               <div class="pf-v5-c-card__body">
//                 <div
//                   class="pf-v5-l-gallery pf-m-gutter"
//                   style="--pf-v5-l-gallery--GridTemplateColumns--min: 100%; --pf-v5-l-gallery--GridTemplateColumns--min-on-sm: 180px; --pf-v5-l-gallery--GridTemplateColumns--min-on-lg: 150px; --pf-v5-l-gallery--GridTemplateColumns--max-on-sm: 1fr;"
//                 >
//                   <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
//                     <div class="pf-v5-l-flex__item">
//                       <i
//                         class="fas fa-check-circle pf-v5-u-success-color-100"
//                         aria-hidden="true"
//                       ></i>
//                     </div>
//                     <div class="pf-v5-l-flex__item">
//                       <span>Cluster</span>
//                     </div>
//                   </div>
//                   <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
//                     <div class="pf-v5-l-flex__item">
//                       <i
//                         class="fas fa-exclamation-circle pf-v5-u-danger-color-100"
//                         aria-hidden="true"
//                       ></i>
//                     </div>
//                     <div class="pf-v5-l-flex__item pf-v5-u-text-nowrap">
//                       <span class="popover-parent">
//                         <a href="#">Control Panel</a>
//                       </span>
//                     </div>
//                   </div>
//                   <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
//                     <div class="pf-v5-l-flex__item pf-v5-u-text-nowrap">
//                       <i
//                         class="fas fa-exclamation-circle pf-v5-u-danger-color-100"
//                         aria-hidden="true"
//                       ></i>
//                     </div>
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-m-space-items-none"
//                     >
//                       <div class="pf-v5-l-flex__item">
//                         <a href="#">Operators</a>
//                       </div>
//                       <div class="pf-v5-l-flex__item">
//                         <span class="pf-v5-u-color-200">1 degraged</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
//                     <div class="pf-v5-l-flex__item">
//                       <i
//                         class="fas fa-check-circle pf-v5-u-success-color-100"
//                         aria-hidden="true"
//                       ></i>
//                     </div>
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-m-space-items-none"
//                     >
//                       <div class="pf-v5-l-flex__item">
//                         <a href="#">Image Vulnerabilities</a>
//                       </div>
//                       <div class="pf-v5-l-flex__item">
//                         <span class="pf-v5-u-color-200">0 vulnerabilities</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
//                     <div class="pf-v5-l-flex__item">
//                       <i
//                         class="fas fa-check-circle pf-v5-u-success-color-100"
//                         aria-hidden="true"
//                       ></i>
//                     </div>
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-m-space-items-none"
//                     >
//                       <div class="pf-v5-l-flex__item">
//                         <a href="#">Storage</a>
//                       </div>
//                       <div class="pf-v5-l-flex__item">
//                         <span class="pf-v5-u-color-200">Degraded</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
//                     <div class="pf-v5-l-flex__item">
//                       <i
//                         class="fas fa-check-circle pf-v5-u-success-color-100"
//                         aria-hidden="true"
//                       ></i>
//                     </div>
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-m-space-items-none"
//                     >
//                       <div class="pf-v5-l-flex__item">
//                         <a href="#">Hardware</a>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
//                     <div class="pf-v5-l-flex__item">
//                       <i
//                         class="fas fa-check-circle pf-v5-u-success-color-100"
//                         aria-hidden="true"
//                       ></i>
//                     </div>
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-m-space-items-none"
//                     >
//                       <div class="pf-v5-l-flex__item">
//                         <a href="#">Insights</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <hr class="pf-v5-c-divider" />
//               <div class="pf-v5-c-notification-drawer">
//                 <div class="pf-v5-c-notification-drawer__body">
//                   <section class="pf-v5-c-notification-drawer__group">
//                     <button
//                       class="pf-v5-c-notification-drawer__group-toggle"
//                       aria-expanded="false"
//                     >
//                       <div
//                         class="pf-v5-c-notification-drawer__group-toggle-title"
//                       >
//                         <div class="pf-v5-l-flex">
//                           <div
//                             class="pf-v5-l-flex__item pf-m-spacer-md"
//                           >Notifications</div>
//                           <div class="pf-v5-c-label-group">
//                             <div class="pf-v5-c-label-group__main">
//                               <ul
//                                 class="pf-v5-c-label-group__list"
//                                 role="list"
//                                 aria-label="Group of labels"
//                               >
//                                 <li class="pf-v5-c-label-group__list-item">
//                                   <span class="pf-v5-c-label pf-m-red">
//                                     <span class="pf-v5-c-label__content">
//                                       <span class="pf-v5-c-label__icon">
//                                         <i
//                                           class="fas fa-fw fa-exclamation-circle"
//                                           aria-hidden="true"
//                                         ></i>
//                                       </span>
//                                       <span class="pf-v5-c-label__text">1</span>
//                                     </span>
//                                   </span>
//                                 </li>
//                                 <li class="pf-v5-c-label-group__list-item">
//                                   <span class="pf-v5-c-label pf-m-orange">
//                                     <span class="pf-v5-c-label__content">
//                                       <span class="pf-v5-c-label__icon">
//                                         <i
//                                           class="fas fa-fw fa-exclamation-circle"
//                                           aria-hidden="true"
//                                         ></i>
//                                       </span>
//                                       <span class="pf-v5-c-label__text">1</span>
//                                     </span>
//                                   </span>
//                                 </li>
//                                 <li class="pf-v5-c-label-group__list-item">
//                                   <span class="pf-v5-c-label pf-m-green">
//                                     <span class="pf-v5-c-label__content">
//                                       <span class="pf-v5-c-label__icon">
//                                         <i
//                                           class="fas fa-fw fa-check-circle"
//                                           aria-hidden="true"
//                                         ></i>
//                                       </span>
//                                       <span class="pf-v5-c-label__text">3</span>
//                                     </span>
//                                   </span>
//                                 </li>
//                                 <li class="pf-v5-c-label-group__list-item">
//                                   <span class="pf-v5-c-label pf-m-blue">
//                                     <span class="pf-v5-c-label__content">
//                                       <span class="pf-v5-c-label__icon">
//                                         <i
//                                           class="fas fa-fw fa-info-circle"
//                                           aria-hidden="true"
//                                         ></i>
//                                       </span>
//                                       <span class="pf-v5-c-label__text">3</span>
//                                     </span>
//                                   </span>
//                                 </li>
//                                 <li class="pf-v5-c-label-group__list-item">
//                                   <span class="pf-v5-c-label pf-m-cyan">
//                                     <span class="pf-v5-c-label__content">
//                                       <span class="pf-v5-c-label__icon">
//                                         <i
//                                           class="fas fa-fw fa-bell"
//                                           aria-hidden="true"
//                                         ></i>
//                                       </span>
//                                       <span class="pf-v5-c-label__text">3</span>
//                                     </span>
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <span
//                         class="pf-v5-c-notification-drawer__group-toggle-icon"
//                       >
//                         <i class="fas fa-angle-right" aria-hidden="true"></i>
//                       </span>
//                     </button>
//                     <ul
//                       class="pf-v5-c-notification-drawer__list"
//                       role="list"
//                       hidden
//                     >
//                       <li
//                         class="pf-v5-c-notification-drawer__list-item pf-m-hoverable pf-m-danger"
//                         tabindex="0"
//                       >
//                         <div
//                           class="pf-v5-c-notification-drawer__list-item-header"
//                         >
//                           <span
//                             class="pf-v5-c-notification-drawer__list-item-header-icon"
//                           >
//                             <i
//                               class="fas fa-exclamation-circle"
//                               aria-hidden="true"
//                             ></i>
//                           </span>
//                           <h2
//                             class="pf-v5-c-notification-drawer__list-item-header-title pf-v5-u-danger-color-200"
//                           >
//                             <span
//                               class="pf-v5-screen-reader"
//                             >Danger notification:</span>
//                             Critical alert regarding control plane
//                           </h2>
//                         </div>
//                         <div
//                           class="pf-v5-c-notification-drawer__list-item-description"
//                         >This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
//                       </li>
//                       <li
//                         class="pf-v5-c-notification-drawer__list-item pf-m-hoverable pf-m-warning"
//                         tabindex="0"
//                       >
//                         <div
//                           class="pf-v5-c-notification-drawer__list-item-header"
//                         >
//                           <span
//                             class="pf-v5-c-notification-drawer__list-item-header-icon"
//                           >
//                             <i
//                               class="fas fa-exclamation-triangle"
//                               aria-hidden="true"
//                             ></i>
//                           </span>
//                           <h2
//                             class="pf-v5-c-notification-drawer__list-item-header-title pf-v5-u-warning-color-200"
//                           >
//                             <span
//                               class="pf-v5-screen-reader"
//                             >Warning notification:</span>
//                             Warning alert
//                           </h2>
//                         </div>
//                         <div
//                           class="pf-v5-c-notification-drawer__list-item-description"
//                         >This is a warning notification description.</div>
//                       </li>
//                     </ul>
//                   </section>
//                 </div>
//               </div>
//             </div>
//             <!-- inventory -->
//             <div class="pf-v5-c-card" id="dashboard-demo-line-chart-card-1">
//               <div class="pf-v5-c-card__header">
//                 <div class="pf-v5-c-card__actions pf-m-no-offset">
//                   <div class="pf-v5-c-select">
//                     <span
//                       id="dashboard-demo-line-chart-card-1-select-dropdown-label"
//                       hidden
//                     >Choose one</span>

//                     <button
//                       class="pf-v5-c-select__toggle pf-m-plain"
//                       type="button"
//                       id="dashboard-demo-line-chart-card-1-select-dropdown-toggle"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                       aria-labelledby="dashboard-demo-line-chart-card-1-select-dropdown-label dashboard-demo-line-chart-card-1-select-dropdown-toggle"
//                     >
//                       <div class="pf-v5-c-select__toggle-wrapper">
//                         <span class="pf-v5-c-select__toggle-text">24 hours</span>
//                       </div>
//                       <span class="pf-v5-c-select__toggle-arrow">
//                         <i class="fas fa-caret-down" aria-hidden="true"></i>
//                       </span>
//                     </button>

//                     <ul
//                       class="pf-v5-c-select__menu pf-m-align-right"
//                       role="listbox"
//                       aria-labelledby="dashboard-demo-line-chart-card-1-select-dropdown-label"
//                       hidden
//                     >
//                       <li role="presentation">
//                         <button
//                           class="pf-v5-c-select__menu-item"
//                           role="option"
//                         >Running</button>
//                       </li>
//                       <li role="presentation">
//                         <button
//                           class="pf-v5-c-select__menu-item pf-m-selected"
//                           role="option"
//                           aria-selected="true"
//                         >
//                           Stopped
//                           <span class="pf-v5-c-select__menu-item-icon">
//                             <i class="fas fa-check" aria-hidden="true"></i>
//                           </span>
//                         </button>
//                       </li>
//                       <li role="presentation">
//                         <button
//                           class="pf-v5-c-select__menu-item"
//                           role="option"
//                         >Down</button>
//                       </li>
//                       <li role="presentation">
//                         <button
//                           class="pf-v5-c-select__menu-item"
//                           role="option"
//                         >Degraded</button>
//                       </li>
//                       <li role="presentation">
//                         <button
//                           class="pf-v5-c-select__menu-item"
//                           role="option"
//                         >Needs maintenance</button>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div
//                   class="pf-v5-c-card__title"
//                   id="dashboard-demo-line-chart-card-1-title"
//                 >
//                   <h2 class="pf-v5-c-title pf-m-xl">Cluster utilizations</h2>
//                 </div>
//               </div>
//               <div
//                 class="pf-v5-c-card pf-m-plain pf-m-expanded"
//                 id="dashboard-demo-line-chart-card-1-group-1"
//               >
//                 <div class="pf-v5-c-card__header pf-m-toggle-right">
//                   <div class="pf-v5-c-card__header-toggle">
//                     <button
//                       class="pf-v5-c-button pf-m-plain"
//                       type="button"
//                       aria-label="Details"
//                       id="dashboard-demo-line-chart-card-1-group-1-toggle"
//                       aria-labelledby="dashboard-demo-line-chart-card-1-group-1-title dashboard-demo-line-chart-card-1-group-1-toggle"
//                     >
//                       <span class="pf-v5-c-card__header-toggle-icon">
//                         <i class="fas fa-angle-right" aria-hidden="true"></i>
//                       </span>
//                     </button>
//                   </div>
//                   <div class="pf-v5-c-card__title">
//                     <h2
//                       class="pf-v5-c-card__title-text"
//                       id="dashboard-demo-line-chart-card-1-group-1-title"
//                     >CPU 1</h2>
//                   </div>
//                 </div>
//                 <div class="pf-v5-c-card__expandable-content">
//                   <div class="pf-v5-c-card__body">
//                     <div class="pf-v5-l-grid pf-m-gutter">
//                       <div class="pf-v5-l-grid pf-m-gutter">
//                         <div class="pf-v5-l-grid__item pf-m-4-col-on-md">
//                           <div
//                             class="pf-v5-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v5-u-h-100-on-md"
//                           >
//                             <div class="pf-v5-l-flex__item">
//                               <b>Temperature</b>
//                             </div>
//                             <hr
//                               class="pf-v5-c-divider pf-m-vertical pf-m-inset-sm pf-v5-u-hidden-on-md"
//                             />
//                             <div class="pf-v5-l-flex__item">
//                               <span>64C</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="pf-v5-l-grid__item pf-m-8-col-on-md">
//                           <div class="pf-v5-l-grid pf-m-gutter">
//                             <div class="pf-v5-l-grid__item pf-m-2-col">
//                               <div
//                                 class="pf-v5-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
//                               >
//                                 <div class="pf-v5-l-flex__item">100C</div>
//                                 <div class="pf-v5-l-flex__item">50C</div>
//                                 <div class="pf-v5-l-flex__item">0C</div>
//                               </div>
//                             </div>
//                             <div class="pf-v5-l-grid__item pf-m-10-col">
//                               <div class="ws-chart">
//                                 <img
//                                   src="/assets/images/img_line-chart-2.png"
//                                   alt="Line chart"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <hr class="pf-v5-c-divider pf-v5-u-hidden-on-md" />
//                       <div class="pf-v5-l-grid pf-m-gutter">
//                         <div class="pf-v5-l-grid__item pf-m-4-col-on-md">
//                           <div
//                             class="pf-v5-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v5-u-h-100-on-md"
//                           >
//                             <div class="pf-v5-l-flex__item">
//                               <b>Speed</b>
//                             </div>
//                             <hr
//                               class="pf-v5-c-divider pf-m-vertical pf-m-inset-sm pf-v5-u-hidden-on-md"
//                             />
//                             <div class="pf-v5-l-flex__item">
//                               <span>2.3Ghz</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="pf-v5-l-grid__item pf-m-8-col-on-md">
//                           <div class="pf-v5-l-grid pf-m-gutter">
//                             <div class="pf-v5-l-grid__item pf-m-2-col">
//                               <div
//                                 class="pf-v5-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
//                               >
//                                 <div class="pf-v5-l-flex__item">36hz</div>
//                                 <div class="pf-v5-l-flex__item">1.5Ghz</div>
//                                 <div class="pf-v5-l-flex__item">0Ghz</div>
//                               </div>
//                             </div>
//                             <div class="pf-v5-l-grid__item pf-m-10-col">
//                               <div class="ws-chart">
//                                 <img
//                                   src="/assets/images/img_line-chart-2.png"
//                                   alt="Line chart"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 class="pf-v5-c-card pf-m-plain"
//                 id="dashboard-demo-line-chart-card-1-group-2"
//               >
//                 <div class="pf-v5-c-card__header pf-m-toggle-right">
//                   <div class="pf-v5-c-card__header-toggle">
//                     <button
//                       class="pf-v5-c-button pf-m-plain"
//                       type="button"
//                       aria-label="Details"
//                       id="dashboard-demo-line-chart-card-1-group-2-toggle"
//                       aria-labelledby="dashboard-demo-line-chart-card-1-group-2-title dashboard-demo-line-chart-card-1-group-2-toggle"
//                     >
//                       <span class="pf-v5-c-card__header-toggle-icon">
//                         <i class="fas fa-angle-right" aria-hidden="true"></i>
//                       </span>
//                     </button>
//                   </div>
//                   <div class="pf-v5-c-card__title">
//                     <h2
//                       class="pf-v5-c-card__title-text"
//                       id="dashboard-demo-line-chart-card-1-group-2-title"
//                     >Pod count</h2>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 class="pf-v5-c-card pf-m-plain"
//                 id="dashboard-demo-line-chart-card-1-group-3"
//               >
//                 <div class="pf-v5-c-card__header pf-m-toggle-right">
//                   <div class="pf-v5-c-card__header-toggle">
//                     <button
//                       class="pf-v5-c-button pf-m-plain"
//                       type="button"
//                       aria-label="Details"
//                       id="dashboard-demo-line-chart-card-1-group-3-toggle"
//                       aria-labelledby="dashboard-demo-line-chart-card-1-group-3-title dashboard-demo-line-chart-card-1-group-3-toggle"
//                     >
//                       <span class="pf-v5-c-card__header-toggle-icon">
//                         <i class="fas fa-angle-right" aria-hidden="true"></i>
//                       </span>
//                     </button>
//                   </div>
//                   <div class="pf-v5-c-card__title">
//                     <h2
//                       class="pf-v5-c-card__title-text"
//                       id="dashboard-demo-line-chart-card-1-group-3-title"
//                     >Memory</h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="pf-v5-c-card">
//               <div class="pf-v5-c-card__title">
//                 <h2 class="pf-v5-c-title pf-m-xl">Recomendations by severity</h2>
//               </div>
//               <div class="pf-v5-c-card__body">
//                 <div class="pf-v5-l-flex pf-m-inline-flex">
//                   <div class="pf-v5-l-grid pf-m-gutter pf-m-all-3-col">
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-m-space-items-xs pf-m-align-items-center"
//                     >
//                       <span
//                         class="pf-v5-u-font-size-2xl pf-v5-u-primary-color-100"
//                       >2</span>
//                       <span class="pf-v5-u-font-color-200">Critical</span>
//                     </div>
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-m-space-items-xs pf-m-align-items-center"
//                     >
//                       <span
//                         class="pf-v5-u-font-size-2xl pf-v5-u-primary-color-100"
//                       >5</span>
//                       <span class="pf-v5-u-font-color-200">Important</span>
//                     </div>
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-m-space-items-xs pf-m-align-items-center"
//                     >
//                       <span
//                         class="pf-v5-u-font-size-2xl pf-v5-u-primary-color-100"
//                       >7</span>
//                       <span class="pf-v5-u-font-color-200">Moderate</span>
//                     </div>
//                     <div
//                       class="pf-v5-l-flex pf-m-column pf-m-space-items-xs pf-m-align-items-center"
//                     >
//                       <span
//                         class="pf-v5-u-font-size-2xl pf-v5-u-primary-color-100"
//                       >12</span>
//                       <span class="pf-v5-u-font-color-200">Low</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="pf-v5-c-card__title">
//                 <h2 class="pf-v5-c-title pf-m-xl">Recomendations by category</h2>
//               </div>
//               <div class="pf-v5-c-card__body">
//                 <img
//                   src="/assets/images/img_pie-chart-with-legend.png"
//                   alt="Pie chart"
//                   width="450"
//                 />
//               </div>
//               <div class="pf-v5-c-card__footer">
//                 <a href="#">View more</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           class="pf-v5-l-grid__item pf-m-gutter pf-m-4-col-on-lg pf-m-3-col-on-2xl"
//           style="--pf-v5-l-grid--item--Order-on-lg:2"
//         >
//           <div
//             class="pf-v5-l-flex pf-m-column pf-m-row-on-md pf-m-column-on-lg"
//           >
//             <div class="pf-v5-l-flex__item pf-m-flex-1">
//               <div class="pf-v5-c-card" id="dashboard-demo-details-card-1">
//                 <div class="pf-v5-c-card__title">
//                   <h2 class="pf-v5-c-title pf-m-xl">Details</h2>
//                 </div>
//                 <div class="pf-v5-c-card__body">
//                   <dl class="pf-v5-c-description-list">
//                     <div class="pf-v5-c-description-list__group">
//                       <dt
//                         class="pf-v5-c-description-list__term"
//                       >Cluster API Address</dt>
//                       <dd class="pf-v5-c-description-list__description">
//                         <div class="pf-v5-c-description-list__text">
//                           <a href="#">https://api1.devcluster.openshift.com</a>
//                         </div>
//                       </dd>
//                     </div>
//                     <div class="pf-v5-c-description-list__group">
//                       <dt class="pf-v5-c-description-list__term">Cluster ID</dt>
//                       <dd class="pf-v5-c-description-list__description">
//                         <div
//                           class="pf-v5-c-description-list__text"
//                         >63b97ac1-b850-41d9-8820-239becde9e86</div>
//                       </dd>
//                     </div>
//                     <div class="pf-v5-c-description-list__group">
//                       <dt class="pf-v5-c-description-list__term">Provider</dt>
//                       <dd class="pf-v5-c-description-list__description">
//                         <div class="pf-v5-c-description-list__text">AWS</div>
//                       </dd>
//                     </div>
//                     <div class="pf-v5-c-description-list__group">
//                       <dt
//                         class="pf-v5-c-description-list__term"
//                       >OpenShift Version</dt>
//                       <dd class="pf-v5-c-description-list__description">
//                         <div
//                           class="pf-v5-c-description-list__text"
//                         >4.5.0.ci-2020-06-16-015028</div>
//                       </dd>
//                     </div>
//                     <div class="pf-v5-c-description-list__group">
//                       <dt
//                         class="pf-v5-c-description-list__term"
//                       >Update Channel</dt>
//                       <dd class="pf-v5-c-description-list__description">
//                         <div class="pf-v5-c-description-list__text">stable-4.5</div>
//                       </dd>
//                     </div>
//                   </dl>
//                 </div>
//                 <hr class="pf-v5-c-divider" />
//                 <div class="pf-v5-c-card__footer">
//                   <a href="#">View Settings</a>
//                 </div>
//               </div>
//             </div>
//             <div class="pf-v5-l-flex__item pf-m-flex-1">
//               <div class="pf-v5-c-card" id="dashboard-demo-data-list-card-1">
//                 <div
//                   class="pf-v5-c-card__header pf-v5-u-align-items-flex-start"
//                 >
//                   <div
//                     class="pf-v5-c-card__title"
//                     id="dashboard-demo-data-list-card-1-title1"
//                   >
//                     <h2 class="pf-v5-c-title pf-m-lg">Inventory</h2>
//                   </div>
//                 </div>
//                 <ul
//                   class="pf-v5-c-data-list pf-m-grid-none"
//                   role="list"
//                   aria-label="Simple data list example"
//                   id="dashboard-demo-data-list-card-1-data-list"
//                 >
//                   <li
//                     class="pf-v5-c-data-list__item"
//                     aria-labelledby="dashboard-demo-data-list-card-1-data-list-item-1"
//                   >
//                     <div class="pf-v5-c-data-list__item-row">
//                       <div class="pf-v5-c-data-list__item-content">
//                         <div
//                           class="pf-v5-c-data-list__cell"
//                           id="dashboard-demo-data-list-card-1-data-list-item-1"
//                         >3 Nodes</div>
//                         <div
//                           class="pf-v5-c-data-list__cell pf-m-no-fill pf-m-align-right"
//                         >
//                           <a href="#">
//                             <div class="pf-v5-l-flex pf-m-space-items-sm">
//                               <span>3</span>
//                               <i
//                                 class="fas fa-check-circle pf-v5-u-success-color-100"
//                                 aria-hidden="true"
//                               ></i>
//                             </div>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li
//                     class="pf-v5-c-data-list__item"
//                     aria-labelledby="dashboard-demo-data-list-card-1-data-list-item-2"
//                   >
//                     <div class="pf-v5-c-data-list__item-row">
//                       <div class="pf-v5-c-data-list__item-content">
//                         <div
//                           class="pf-v5-c-data-list__cell"
//                           id="dashboard-demo-data-list-card-1-data-list-item-2"
//                         >8 Disks</div>
//                         <div
//                           class="pf-v5-c-data-list__cell pf-m-no-fill pf-m-align-right"
//                         >
//                           <a href="#">
//                             <div class="pf-v5-l-flex pf-m-space-items-sm">
//                               <span>8</span>
//                               <i
//                                 class="fas fa-check-circle pf-v5-u-success-color-100"
//                                 aria-hidden="true"
//                               ></i>
//                             </div>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li
//                     class="pf-v5-c-data-list__item"
//                     aria-labelledby="dashboard-demo-data-list-card-1-data-list-item-3"
//                   >
//                     <div class="pf-v5-c-data-list__item-row">
//                       <div class="pf-v5-c-data-list__item-content">
//                         <div
//                           class="pf-v5-c-data-list__cell"
//                           id="dashboard-demo-data-list-card-1-data-list-item-3"
//                         >20 Pods</div>
//                         <div
//                           class="pf-v5-c-data-list__cell pf-m-no-fill pf-m-align-right"
//                         >
//                           <a href="#">
//                             <div class="pf-v5-l-flex pf-m-space-items-sm">
//                               <span>20</span>
//                               <i
//                                 class="fas fa-check-circle pf-v5-u-success-color-100"
//                                 aria-hidden="true"
//                               ></i>
//                             </div>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li
//                     class="pf-v5-c-data-list__item"
//                     aria-labelledby="dashboard-demo-data-list-card-1-data-list-item-4"
//                   >
//                     <div class="pf-v5-c-data-list__item-row">
//                       <div class="pf-v5-c-data-list__item-content">
//                         <div
//                           class="pf-v5-c-data-list__cell"
//                           id="dashboard-demo-data-list-card-1-data-list-item-4"
//                         >12 PVs</div>
//                         <div
//                           class="pf-v5-c-data-list__cell pf-m-no-fill pf-m-align-right"
//                         >
//                           <a href="#">
//                             <div class="pf-v5-l-flex pf-m-space-items-sm">
//                               <span>12</span>
//                               <i
//                                 class="fas fa-check-circle pf-v5-u-success-color-100"
//                                 aria-hidden="true"
//                               ></i>
//                             </div>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li
//                     class="pf-v5-c-data-list__item"
//                     aria-labelledby="dashboard-demo-data-list-card-1-data-list-item-5"
//                   >
//                     <div class="pf-v5-c-data-list__item-row">
//                       <div class="pf-v5-c-data-list__item-content">
//                         <div
//                           class="pf-v5-c-data-list__cell"
//                           id="dashboard-demo-data-list-card-1-data-list-item-5"
//                         >18 PVCs</div>
//                         <div
//                           class="pf-v5-c-data-list__cell pf-m-no-fill pf-m-align-right"
//                         >
//                           <a href="#">
//                             <div class="pf-v5-l-flex pf-m-space-items-sm">
//                               <span>18</span>
//                               <i
//                                 class="fas fa-check-circle pf-v5-u-success-color-100"
//                                 aria-hidden="true"
//                               ></i>
//                             </div>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           class="pf-v5-l-grid__item pf-m-4-col-on-lg pf-m-3-col-on-2xl"
//           style="--pf-v5-l-grid--item--Order-on-lg:4"
//         >
//           <div class="pf-v5-l-flex pf-m-column">
//             <div class="pf-v5-c-card" id="dashboard-demo-events-card-1">
//               <div class="pf-v5-c-card__header">
//                 <div class="pf-v5-c-card__actions pf-m-no-offset">
//                   <div class="pf-v5-c-select">
//                     <span
//                       id="dashboard-demo-events-card-1-select-dropdown-label"
//                       hidden
//                     >Choose one</span>

//                     <button
//                       class="pf-v5-c-select__toggle pf-m-plain"
//                       type="button"
//                       id="dashboard-demo-events-card-1-select-dropdown-toggle"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                       aria-labelledby="dashboard-demo-events-card-1-select-dropdown-label dashboard-demo-events-card-1-select-dropdown-toggle"
//                     >
//                       <div class="pf-v5-c-select__toggle-wrapper">
//                         <span class="pf-v5-c-select__toggle-text">Status</span>
//                       </div>
//                       <span class="pf-v5-c-select__toggle-arrow">
//                         <i class="fas fa-caret-down" aria-hidden="true"></i>
//                       </span>
//                     </button>

//                     <ul
//                       class="pf-v5-c-select__menu pf-m-align-right"
//                       role="listbox"
//                       aria-labelledby="dashboard-demo-events-card-1-select-dropdown-label"
//                       hidden
//                     >
//                       <li role="presentation">
//                         <button
//                           class="pf-v5-c-select__menu-item"
//                           role="option"
//                         >Running</button>
//                       </li>
//                       <li role="presentation">
//                         <button
//                           class="pf-v5-c-select__menu-item pf-m-selected"
//                           role="option"
//                           aria-selected="true"
//                         >
//                           Stopped
//                           <span class="pf-v5-c-select__menu-item-icon">
//                             <i class="fas fa-check" aria-hidden="true"></i>
//                           </span>
//                         </button>
//                       </li>
//                       <li role="presentation">
//                         <button
//                           class="pf-v5-c-select__menu-item"
//                           role="option"
//                         >Down</button>
//                       </li>
//                       <li role="presentation">
//                         <button
//                           class="pf-v5-c-select__menu-item"
//                           role="option"
//                         >Degraded</button>
//                       </li>
//                       <li role="presentation">
//                         <button
//                           class="pf-v5-c-select__menu-item"
//                           role="option"
//                         >Needs maintenance</button>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div
//                   class="pf-v5-c-card__title"
//                   id="dashboard-demo-events-card-1-title1"
//                   style="padding-block-start: 3px;"
//                 >
//                   <h2 class="pf-v5-c-title pf-m-xl">Events</h2>
//                 </div>
//               </div>
//               <div class="pf-v5-c-card__body">
//                 <dl class="pf-v5-c-description-list pf-m-compact">
//                   <div class="pf-v5-c-description-list__group">
//                     <dt class="pf-v5-c-description-list__term">
//                       <div class="pf-v5-l-flex pf-m-nowrap">
//                         <div class="pf-v5-l-flex__item pf-m-spacer-sm">
//                           <i
//                             class="fas fa-exclamation-circle pf-v5-u-danger-color-100"
//                             aria-hidden="true"
//                           ></i>
//                         </div>
//                         <div class="pf-v5-l-flex__item">Readiness probe failed</div>
//                       </div>
//                     </dt>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div
//                         class="pf-v5-c-description-list__text"
//                       >Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect: connection refused</div>
//                     </dd>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div class="pf-v5-c-description-list__text">
//                         <time
//                           class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
//                         >Jun 17, 11:02 am</time>
//                       </div>
//                     </dd>
//                   </div>
//                   <div class="pf-v5-c-description-list__group">
//                     <dt class="pf-v5-c-description-list__term">
//                       <div class="pf-v5-l-flex pf-m-nowrap">
//                         <div class="pf-v5-l-flex__item pf-m-spacer-sm">
//                           <i
//                             class="fas fa-check-circle pf-v5-u-success-color-100"
//                             aria-hidden="true"
//                           ></i>
//                         </div>
//                         <div class="pf-v5-l-flex__item">Successful assignment</div>
//                       </div>
//                     </dt>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div
//                         class="pf-v5-c-description-list__text"
//                       >Successfully assigned default/example to ip-10-0-130-149.ec2.internal</div>
//                     </dd>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div class="pf-v5-c-description-list__text">
//                         <time
//                           class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
//                         >Jun 17, 11:13 am</time>
//                       </div>
//                     </dd>
//                   </div>
//                   <div class="pf-v5-c-description-list__group">
//                     <dt class="pf-v5-c-description-list__term">
//                       <div class="pf-v5-l-flex pf-m-nowrap">
//                         <div class="pf-v5-l-flex__item pf-m-spacer-sm">
//                           <svg
//                             class="pf-v5-c-spinner pf-m-md"
//                             role="progressbar"
//                             viewBox="0 0 100 100"
//                             aria-label="Loading"
//                           >
//                             <circle
//                               class="pf-v5-c-spinner__path"
//                               cx="50"
//                               cy="50"
//                               r="45"
//                               fill="none"
//                             />
//                           </svg>
//                         </div>
//                         <div class="pf-v5-l-flex__item">Pulling image</div>
//                       </div>
//                     </dt>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div
//                         class="pf-v5-c-description-list__text"
//                       >Pulling image "openshift/hello-openshift"</div>
//                     </dd>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div class="pf-v5-c-description-list__text">
//                         <time
//                           class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
//                         >Jun 17, 10:59 am</time>
//                       </div>
//                     </dd>
//                   </div>
//                   <div class="pf-v5-c-description-list__group">
//                     <dt class="pf-v5-c-description-list__term">
//                       <div class="pf-v5-l-flex pf-m-nowrap">
//                         <div class="pf-v5-l-flex__item pf-m-spacer-sm">
//                           <i
//                             class="fas fa-check-circle pf-v5-u-success-color-100"
//                             aria-hidden="true"
//                           ></i>
//                         </div>
//                         <div class="pf-v5-l-flex__item">Created container</div>
//                       </div>
//                     </dt>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div
//                         class="pf-v5-c-description-list__text"
//                       >Created container hello-openshift</div>
//                     </dd>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div class="pf-v5-c-description-list__text">
//                         <time
//                           class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
//                         >Jun 17, 10:45 am</time>
//                       </div>
//                     </dd>
//                   </div>

//                   <div class="pf-v5-c-description-list__group">
//                     <dt class="pf-v5-c-description-list__term">
//                       <div class="pf-v5-l-flex pf-m-nowrap">
//                         <div class="pf-v5-l-flex__item pf-m-spacer-sm">
//                           <i
//                             class="fas fa-exclamation-triangle pf-v5-u-warning-color-100"
//                             aria-hidden="true"
//                           ></i>
//                         </div>
//                         <div
//                           class="pf-v5-l-flex__item"
//                         >CPU utilitization over 50%</div>
//                       </div>
//                     </dt>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div
//                         class="pf-v5-c-description-list__text"
//                       >Migrated 2 pods to other hosts</div>
//                     </dd>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div class="pf-v5-c-description-list__text">
//                         <time
//                           class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
//                         >Jun 17, 10:33 am</time>
//                       </div>
//                     </dd>
//                   </div>

//                   <div class="pf-v5-c-description-list__group">
//                     <dt class="pf-v5-c-description-list__term">
//                       <div class="pf-v5-l-flex pf-m-nowrap">
//                         <div class="pf-v5-l-flex__item pf-m-spacer-sm">
//                           <i
//                             class="fas fa-exclamation-circle pf-v5-u-danger-color-100"
//                             aria-hidden="true"
//                           ></i>
//                         </div>
//                         <div class="pf-v5-l-flex__item">Rook-osd-10-328949</div>
//                       </div>
//                     </dt>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div
//                         class="pf-v5-c-description-list__text"
//                       >Rebuild initiated as Disk 5 failed</div>
//                     </dd>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div class="pf-v5-c-description-list__text">
//                         <time
//                           class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
//                         >Jun 17, 10:33 am</time>
//                       </div>
//                     </dd>
//                   </div>

//                   <div class="pf-v5-c-description-list__group">
//                     <dt class="pf-v5-c-description-list__term">
//                       <div class="pf-v5-l-flex pf-m-nowrap">
//                         <div class="pf-v5-l-flex__item pf-m-spacer-sm">
//                           <i
//                             class="fas fa-check-circle pf-v5-u-success-color-100"
//                             aria-hidden="true"
//                           ></i>
//                         </div>
//                         <div class="pf-v5-l-flex__item">Created container</div>
//                       </div>
//                     </dt>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div
//                         class="pf-v5-c-description-list__text"
//                       >Created container hello-openshift-123</div>
//                     </dd>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div class="pf-v5-c-description-list__text">
//                         <time
//                           class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
//                         >Jun 17, 10:31 am</time>
//                       </div>
//                     </dd>
//                   </div>

//                   <div class="pf-v5-c-description-list__group">
//                     <dt class="pf-v5-c-description-list__term">
//                       <div class="pf-v5-l-flex pf-m-nowrap">
//                         <div class="pf-v5-l-flex__item pf-m-spacer-sm">
//                           <i
//                             class="fas fa-check-circle pf-v5-u-success-color-100"
//                             aria-hidden="true"
//                           ></i>
//                         </div>
//                         <div class="pf-v5-l-flex__item">Created container</div>
//                       </div>
//                     </dt>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div
//                         class="pf-v5-c-description-list__text"
//                       >Created container hello-openshift-456</div>
//                     </dd>
//                     <dd class="pf-v5-c-description-list__description">
//                       <div class="pf-v5-c-description-list__text">
//                         <time
//                           class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
//                         >Jun 17, 10:30 am</time>
//                       </div>
//                     </dd>
//                   </div>
//                 </dl>
//               </div>
//               <hr class="pf-v5-c-divider" />
//               <div class="pf-v5-c-card__footer">
//                 <a href="#">View all events</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </main>

export { Dashboard };

{
  /*}
<div class="pf-v5-c-page" id="dashboard-demo">
  <div class="pf-v5-c-skip-to-content">
    <a
      class="pf-v5-c-button pf-m-primary"
      href="#main-content-dashboard-demo"
    >Skip to content</a>
  </div>
  <header class="pf-v5-c-masthead" id="dashboard-demo-masthead">
    <span class="pf-v5-c-masthead__toggle">
      <button
        class="pf-v5-c-button pf-m-plain"
        type="button"
        aria-label="Global navigation"
      >
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </span>
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <img
          class="pf-v5-c-brand"
          src="/assets/images/pf-logo.svg"
          alt="PatternFly logo"
          style="--pf-v5-c-brand--Height:36px"
        />
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="dashboard-demo-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <i class="fas fa-th" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <i class="fas fa-cog" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <i class="fas fa-question-circle" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v5-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <button
                class="pf-v5-c-menu-toggle pf-m-full-height"
                type="button"
                aria-expanded="false"
              >
                <span class="pf-v5-c-menu-toggle__icon">
                  <img
                    class="pf-v5-c-avatar"
                    alt="Avatar image"
                    src="/assets/images/img_avatar-light.svg"
                  />
                </span>
                <span class="pf-v5-c-menu-toggle__text">Ned Username</span>
                <span class="pf-v5-c-menu-toggle__controls">
                  <span class="pf-v5-c-menu-toggle__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="pf-v5-c-page__sidebar">
    <div class="pf-v5-c-page__sidebar-body">
      <nav
        class="pf-v5-c-nav"
        id="dashboard-demo-primary-nav"
        aria-label="Global"
      >
        <ul class="pf-v5-c-nav__list" role="list">
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">System panel</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a
              href="#"
              class="pf-v5-c-nav__link pf-m-current"
              aria-current="page"
            >Policy</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Authentication</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Network services</a>
          </li>
          <li class="pf-v5-c-nav__item">
            <a href="#" class="pf-v5-c-nav__link">Server</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <main
    class="pf-v5-c-page__main"
    tabindex="-1"
    id="main-content-dashboard-demo"
  >
    <section class="pf-v5-c-page__main-breadcrumb pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <nav class="pf-v5-c-breadcrumb" aria-label="breadcrumb">
          <ol class="pf-v5-c-breadcrumb__list" role="list">
            <li class="pf-v5-c-breadcrumb__item">
              <a href="#" class="pf-v5-c-breadcrumb__link">Section home</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a href="#" class="pf-v5-c-breadcrumb__link">Section title</a>
            </li>
            <li class="pf-v5-c-breadcrumb__item">
              <span class="pf-v5-c-breadcrumb__item-divider">
                <i class="fas fa-angle-right" aria-hidden="true"></i>
              </span>

              <a
                href="#"
                class="pf-v5-c-breadcrumb__link pf-m-current"
                aria-current="page"
              >Section landing</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width pf-m-light">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-c-content">
          <h1>Main title</h1>
          <p>This is a full page demo.</p>
        </div>
      </div>
    </section>
    <section class="pf-v5-c-page__main-section pf-m-limit-width">
      <div class="pf-v5-c-page__main-body">
        <div class="pf-v5-l-grid pf-m-gutter">
          <div class="pf-v5-c-card pf-m-expanded">
            <div class="pf-v5-c-card__header">
              <div class="pf-v5-c-card__header-toggle">
                <button
                  class="pf-v5-c-button pf-m-plain"
                  type="button"
                  aria-label="Details"
                  id="dashboard-demo-expandable-status-card-1-toggle"
                  aria-labelledby="dashboard-demo-expandable-status-card-1-title dashboard-demo-expandable-status-card-1-toggle"
                >
                  <span class="pf-v5-c-card__header-toggle-icon">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="pf-v5-c-card__actions">
                <div class="pf-v5-c-dropdown">
                  <button
                    class="pf-v5-c-dropdown__toggle pf-m-plain"
                    id="dashboard-demo-expandable-status-card-1-dropdown-kebab-right-aligned-button"
                    aria-expanded="false"
                    type="button"
                    aria-label="Actions"
                  >
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul
                    class="pf-v5-c-dropdown__menu"
                    aria-labelledby="dashboard-demo-expandable-status-card-1-dropdown-kebab-right-aligned-button"
                    hidden
                    role="menu"
                  >
                    <li role="none">
                      <a
                        class="pf-v5-c-dropdown__menu-item"
                        role="menuitem"
                        href="#"
                      >Link</a>
                    </li>
                    <li role="none">
                      <button
                        class="pf-v5-c-dropdown__menu-item"
                        role="menuitem"
                        type="button"
                      >Action</button>
                    </li>
                    <li role="none">
                      <a
                        class="pf-v5-c-dropdown__menu-item pf-m-disabled"
                        role="menuitem"
                        href="#"
                        aria-disabled="true"
                        tabindex="-1"
                      >Disabled link</a>
                    </li>
                    <li role="none">
                      <button
                        class="pf-v5-c-dropdown__menu-item"
                        role="menuitem"
                        type="button"
                        disabled
                      >Disabled action</button>
                    </li>
                    <li class="pf-v5-c-divider" role="separator"></li>
                    <li role="none">
                      <a
                        class="pf-v5-c-dropdown__menu-item"
                        role="menuitem"
                        href="#"
                      >Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="pf-v5-c-card__title"
                id="dashboard-demo-expandable-status-card-1-title"
              >
                <h2 class="pf-v5-c-title pf-m-xl">Improve recommended pathways</h2>
              </div>
            </div>
            <div class="pf-v5-c-card__expandable-content">
              <div class="pf-v5-l-flex pf-m-column pf-m-row-on-md">
                <div
                  class="pf-v5-l-flex pf-m-flex-1 pf-m-align-self-stretch pf-m-align-items-stretch"
                >
                  <div class="pf-v5-c-card pf-m-plain">
                    <div class="pf-v5-c-card__body">
                      <div
                        class="pf-v5-l-flex pf-m-column pf-v5-u-h-100 pf-m-space-items-sm"
                      >
                        <div
                          class="pf-v5-l-flex pf-m-space-items-sm pf-m-column-on-md pf-m-row-on-lg pf-m-spacer-md-on-md pf-m-spacer-sm-on-lg"
                        >
                          <div class="pf-v5-c-label-group">
                            <div class="pf-v5-c-label-group__main">
                              <ul
                                class="pf-v5-c-label-group__list"
                                role="list"
                                aria-label="Group of labels"
                              >
                                <li class="pf-v5-c-label-group__list-item">
                                  <span
                                    class="pf-v5-c-label pf-m-outline pf-m-blue"
                                  >
                                    <span class="pf-v5-c-label__content">
                                      <span class="pf-v5-c-label__icon">
                                        <i
                                          class="pf-v5-pficon pf-v5-pficon-port"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                      <span
                                        class="pf-v5-c-label__text"
                                      >Performance</span>
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <a href="#">378 systems</a>
                        </div>
                        <div class="pf-v5-l-flex__item pf-m-spacer-md">
                          <p>Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network instabilities and issues with system performance</p>
                        </div>
                        <div
                          class="pf-v5-l-flex pf-m-grow pf-m-column pf-m-row-on-lg pf-m-justify-content-flex-end pf-m-justify-content-flex-start-on-lg pf-m-align-content-flex-end-on-lg"
                          style="row-gap: var(--pf-v5-global--spacer--md);"
                        >
                          <div
                            class="pf-v5-l-flex__item"
                            style="margin-block-end: -.25em"
                          >
                            <span class="pf-v5-c-label pf-m-red">
                              <span class="pf-v5-c-label__content">
                                <span class="pf-v5-c-label__text">Incident</span>
                              </span>
                            </span>
                          </div>
                          <div
                            class="pf-v5-l-flex pf-m-space-items-sm pf-m-align-items-center pf-m-nowrap"
                            style="row-gap: var(--pf-v5-global--spacer--md);"
                          >
                            <i
                              class="pf-v5-pficon pf-v5-pficon-on pf-v5-u-color-400"
                              style="line-height: 1"
                              aria-hidden="true"
                            ></i>
                            <p class="pf-v5-u-color-200">
                              System reboot
                              <b class="pf-v5-u-color-100">is not</b> required
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-c-card__footer">
                      <a class="pf-v5-c-button pf-m-link pf-m-inline" href="#">
                        View pathway
                        <span class="pf-v5-c-button__icon pf-m-end">
                          <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr class="pf-v5-c-divider pf-m-vertical-on-md pf-m-inset-3xl" />
                <div
                  class="pf-v5-l-flex pf-m-flex-1 pf-m-align-self-stretch pf-m-align-items-stretch"
                >
                  <div class="pf-v5-c-card pf-m-plain">
                    <div class="pf-v5-c-card__body">
                      <div
                        class="pf-v5-l-flex pf-m-column pf-v5-u-h-100 pf-m-space-items-sm"
                      >
                        <div
                          class="pf-v5-l-flex pf-m-space-items-sm pf-m-column-on-md pf-m-row-on-lg pf-m-spacer-md-on-md pf-m-spacer-sm-on-lg"
                        >
                          <div class="pf-v5-c-label-group">
                            <div class="pf-v5-c-label-group__main">
                              <ul
                                class="pf-v5-c-label-group__list"
                                role="list"
                                aria-label="Group of labels"
                              >
                                <li class="pf-v5-c-label-group__list-item">
                                  <span
                                    class="pf-v5-c-label pf-m-outline pf-m-blue"
                                  >
                                    <span class="pf-v5-c-label__content">
                                      <span class="pf-v5-c-label__icon">
                                        <i
                                          class="fas fa-cube"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                      <span
                                        class="pf-v5-c-label__text"
                                      >Stablility</span>
                                    </span>
                                  </span>
                                </li>
                                <li class="pf-v5-c-label-group__list-item">
                                  <button
                                    class="pf-v5-c-label pf-m-overflow"
                                    type="button"
                                  >
                                    <span class="pf-v5-c-label__content">
                                      <span class="pf-v5-c-label__text">1 more</span>
                                    </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <a href="#">211 systems</a>
                        </div>
                        <div class="pf-v5-l-flex__item pf-m-spacer-md">
                          <p>Adjust your networking configuration to get ahead of network perfomance degradations and packet losses</p>
                        </div>
                        <div
                          class="pf-v5-l-flex pf-m-grow pf-m-column pf-m-row-on-lg pf-m-justify-content-flex-end pf-m-justify-content-flex-start-on-lg pf-m-align-content-flex-end-on-lg"
                          style="row-gap: var(--pf-v5-global--spacer--md);"
                        >
                          <div
                            class="pf-v5-l-flex pf-m-space-items-sm pf-m-align-items-center pf-m-nowrap"
                            style="row-gap: var(--pf-v5-global--spacer--md);"
                          >
                            <i
                              class="pf-v5-pficon pf-v5-pficon-on pf-v5-u-danger-color-100"
                              style="line-height: 1"
                              aria-hidden="true"
                            ></i>
                            <p class="pf-v5-u-color-200">
                              System reboot
                              <b class="pf-v5-u-color-100">is</b> required
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-c-card__footer">
                      <a class="pf-v5-c-button pf-m-link pf-m-inline" href="#">
                        View pathway
                        <span class="pf-v5-c-button__icon pf-m-end">
                          <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr class="pf-v5-c-divider pf-m-vertical-on-md pf-m-inset-3xl" />
                <div
                  class="pf-v5-l-flex pf-m-flex-1 pf-m-align-self-stretch pf-m-align-items-stretch"
                >
                  <div class="pf-v5-c-card pf-m-plain">
                    <div class="pf-v5-c-card__body">
                      <div
                        class="pf-v5-l-flex pf-m-column pf-v5-u-h-100 pf-m-space-items-sm"
                      >
                        <div
                          class="pf-v5-l-flex pf-m-space-items-sm pf-m-column-on-md pf-m-row-on-lg pf-m-spacer-md-on-md pf-m-spacer-sm-on-lg"
                        >
                          <div class="pf-v5-c-label-group">
                            <div class="pf-v5-c-label-group__main">
                              <ul
                                class="pf-v5-c-label-group__list"
                                role="list"
                                aria-label="Group of labels"
                              >
                                <li class="pf-v5-c-label-group__list-item">
                                  <span
                                    class="pf-v5-c-label pf-m-outline pf-m-blue"
                                  >
                                    <span class="pf-v5-c-label__content">
                                      <span class="pf-v5-c-label__icon">
                                        <i
                                          class="pf-v5-pficon pf-v5-pficon-automation"
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                      <span
                                        class="pf-v5-c-label__text"
                                      >Availability</span>
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <a href="#">166 systems</a>
                        </div>
                        <div class="pf-v5-l-flex__item pf-m-spacer-md">
                          <p>Fine tune your Oracle DB configuration to improve database performance and avoid process failure</p>
                        </div>
                        <div
                          class="pf-v5-l-flex pf-m-grow pf-m-column pf-m-row-on-lg pf-m-justify-content-flex-end pf-m-justify-content-flex-start-on-lg pf-m-align-content-flex-end-on-lg"
                          style="row-gap: var(--pf-v5-global--spacer--md);"
                        >
                          <div
                            class="pf-v5-l-flex__item"
                            style="margin-block-end: -.25em"
                          >
                            <span class="pf-v5-c-label pf-m-red">
                              <span class="pf-v5-c-label__content">
                                <span class="pf-v5-c-label__text">Incident</span>
                              </span>
                            </span>
                          </div>
                          <div
                            class="pf-v5-l-flex pf-m-space-items-sm pf-m-align-items-center pf-m-nowrap"
                            style="row-gap: var(--pf-v5-global--spacer--md);"
                          >
                            <i
                              class="pf-v5-pficon pf-v5-pficon-on pf-v5-u-color-400"
                              style="line-height: 1"
                              aria-hidden="true"
                            ></i>
                            <p class="pf-v5-u-color-200">
                              System reboot
                              <b class="pf-v5-u-color-100">is not</b> required
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-c-card__footer">
                      <a class="pf-v5-c-button pf-m-link pf-m-inline" href="#">
                        View pathway
                        <span class="pf-v5-c-button__icon pf-m-end">
                          <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pf-v5-l-grid__item pf-m-gutter pf-m-4-col-on-lg pf-m-6-col-on-2xl"
            style="--pf-v5-l-grid--item--Order-on-lg:3"
          >
            <div class="pf-v5-l-flex pf-m-column">
              <div
                class="pf-v5-c-card pf-m-expanded"
                id="dashboard-demo-status-card-1"
              >
                <div class="pf-v5-c-card__header">
                  <h2 class="pf-v5-c-title pf-m-xl">Status</h2>
                </div>
                <div class="pf-v5-c-card__body">
                  <div
                    class="pf-v5-l-gallery pf-m-gutter"
                    style="--pf-v5-l-gallery--GridTemplateColumns--min: 100%; --pf-v5-l-gallery--GridTemplateColumns--min-on-sm: 180px; --pf-v5-l-gallery--GridTemplateColumns--min-on-lg: 150px; --pf-v5-l-gallery--GridTemplateColumns--max-on-sm: 1fr;"
                  >
                    <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
                      <div class="pf-v5-l-flex__item">
                        <i
                          class="fas fa-check-circle pf-v5-u-success-color-100"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div class="pf-v5-l-flex__item">
                        <span>Cluster</span>
                      </div>
                    </div>
                    <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
                      <div class="pf-v5-l-flex__item">
                        <i
                          class="fas fa-exclamation-circle pf-v5-u-danger-color-100"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div class="pf-v5-l-flex__item pf-v5-u-text-nowrap">
                        <span class="popover-parent">
                          <a href="#">Control Panel</a>
                        </span>
                      </div>
                    </div>
                    <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
                      <div class="pf-v5-l-flex__item pf-v5-u-text-nowrap">
                        <i
                          class="fas fa-exclamation-circle pf-v5-u-danger-color-100"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div
                        class="pf-v5-l-flex pf-m-column pf-m-space-items-none"
                      >
                        <div class="pf-v5-l-flex__item">
                          <a href="#">Operators</a>
                        </div>
                        <div class="pf-v5-l-flex__item">
                          <span class="pf-v5-u-color-200">1 degraged</span>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
                      <div class="pf-v5-l-flex__item">
                        <i
                          class="fas fa-check-circle pf-v5-u-success-color-100"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div
                        class="pf-v5-l-flex pf-m-column pf-m-space-items-none"
                      >
                        <div class="pf-v5-l-flex__item">
                          <a href="#">Image Vulnerabilities</a>
                        </div>
                        <div class="pf-v5-l-flex__item">
                          <span class="pf-v5-u-color-200">0 vulnerabilities</span>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
                      <div class="pf-v5-l-flex__item">
                        <i
                          class="fas fa-check-circle pf-v5-u-success-color-100"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div
                        class="pf-v5-l-flex pf-m-column pf-m-space-items-none"
                      >
                        <div class="pf-v5-l-flex__item">
                          <a href="#">Storage</a>
                        </div>
                        <div class="pf-v5-l-flex__item">
                          <span class="pf-v5-u-color-200">Degraded</span>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
                      <div class="pf-v5-l-flex__item">
                        <i
                          class="fas fa-check-circle pf-v5-u-success-color-100"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div
                        class="pf-v5-l-flex pf-m-column pf-m-space-items-none"
                      >
                        <div class="pf-v5-l-flex__item">
                          <a href="#">Hardware</a>
                        </div>
                      </div>
                    </div>
                    <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
                      <div class="pf-v5-l-flex__item">
                        <i
                          class="fas fa-check-circle pf-v5-u-success-color-100"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div
                        class="pf-v5-l-flex pf-m-column pf-m-space-items-none"
                      >
                        <div class="pf-v5-l-flex__item">
                          <a href="#">Insights</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="pf-v5-c-divider" />
                <div class="pf-v5-c-notification-drawer">
                  <div class="pf-v5-c-notification-drawer__body">
                    <section class="pf-v5-c-notification-drawer__group">
                      <button
                        class="pf-v5-c-notification-drawer__group-toggle"
                        aria-expanded="false"
                      >
                        <div
                          class="pf-v5-c-notification-drawer__group-toggle-title"
                        >
                          <div class="pf-v5-l-flex">
                            <div
                              class="pf-v5-l-flex__item pf-m-spacer-md"
                            >Notifications</div>
                            <div class="pf-v5-c-label-group">
                              <div class="pf-v5-c-label-group__main">
                                <ul
                                  class="pf-v5-c-label-group__list"
                                  role="list"
                                  aria-label="Group of labels"
                                >
                                  <li class="pf-v5-c-label-group__list-item">
                                    <span class="pf-v5-c-label pf-m-red">
                                      <span class="pf-v5-c-label__content">
                                        <span class="pf-v5-c-label__icon">
                                          <i
                                            class="fas fa-fw fa-exclamation-circle"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span class="pf-v5-c-label__text">1</span>
                                      </span>
                                    </span>
                                  </li>
                                  <li class="pf-v5-c-label-group__list-item">
                                    <span class="pf-v5-c-label pf-m-orange">
                                      <span class="pf-v5-c-label__content">
                                        <span class="pf-v5-c-label__icon">
                                          <i
                                            class="fas fa-fw fa-exclamation-circle"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span class="pf-v5-c-label__text">1</span>
                                      </span>
                                    </span>
                                  </li>
                                  <li class="pf-v5-c-label-group__list-item">
                                    <span class="pf-v5-c-label pf-m-green">
                                      <span class="pf-v5-c-label__content">
                                        <span class="pf-v5-c-label__icon">
                                          <i
                                            class="fas fa-fw fa-check-circle"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span class="pf-v5-c-label__text">3</span>
                                      </span>
                                    </span>
                                  </li>
                                  <li class="pf-v5-c-label-group__list-item">
                                    <span class="pf-v5-c-label pf-m-blue">
                                      <span class="pf-v5-c-label__content">
                                        <span class="pf-v5-c-label__icon">
                                          <i
                                            class="fas fa-fw fa-info-circle"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span class="pf-v5-c-label__text">3</span>
                                      </span>
                                    </span>
                                  </li>
                                  <li class="pf-v5-c-label-group__list-item">
                                    <span class="pf-v5-c-label pf-m-cyan">
                                      <span class="pf-v5-c-label__content">
                                        <span class="pf-v5-c-label__icon">
                                          <i
                                            class="fas fa-fw fa-bell"
                                            aria-hidden="true"
                                          ></i>
                                        </span>
                                        <span class="pf-v5-c-label__text">3</span>
                                      </span>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span
                          class="pf-v5-c-notification-drawer__group-toggle-icon"
                        >
                          <i class="fas fa-angle-right" aria-hidden="true"></i>
                        </span>
                      </button>
                      <ul
                        class="pf-v5-c-notification-drawer__list"
                        role="list"
                        hidden
                      >
                        <li
                          class="pf-v5-c-notification-drawer__list-item pf-m-hoverable pf-m-danger"
                          tabindex="0"
                        >
                          <div
                            class="pf-v5-c-notification-drawer__list-item-header"
                          >
                            <span
                              class="pf-v5-c-notification-drawer__list-item-header-icon"
                            >
                              <i
                                class="fas fa-exclamation-circle"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <h2
                              class="pf-v5-c-notification-drawer__list-item-header-title pf-v5-u-danger-color-200"
                            >
                              <span
                                class="pf-v5-screen-reader"
                              >Danger notification:</span>
                              Critical alert regarding control plane
                            </h2>
                          </div>
                          <div
                            class="pf-v5-c-notification-drawer__list-item-description"
                          >This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
                        </li>
                        <li
                          class="pf-v5-c-notification-drawer__list-item pf-m-hoverable pf-m-warning"
                          tabindex="0"
                        >
                          <div
                            class="pf-v5-c-notification-drawer__list-item-header"
                          >
                            <span
                              class="pf-v5-c-notification-drawer__list-item-header-icon"
                            >
                              <i
                                class="fas fa-exclamation-triangle"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <h2
                              class="pf-v5-c-notification-drawer__list-item-header-title pf-v5-u-warning-color-200"
                            >
                              <span
                                class="pf-v5-screen-reader"
                              >Warning notification:</span>
                              Warning alert
                            </h2>
                          </div>
                          <div
                            class="pf-v5-c-notification-drawer__list-item-description"
                          >This is a warning notification description.</div>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
              <!-- inventory -->
              <div class="pf-v5-c-card" id="dashboard-demo-line-chart-card-1">
                <div class="pf-v5-c-card__header">
                  <div class="pf-v5-c-card__actions pf-m-no-offset">
                    <div class="pf-v5-c-select">
                      <span
                        id="dashboard-demo-line-chart-card-1-select-dropdown-label"
                        hidden
                      >Choose one</span>

                      <button
                        class="pf-v5-c-select__toggle pf-m-plain"
                        type="button"
                        id="dashboard-demo-line-chart-card-1-select-dropdown-toggle"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-labelledby="dashboard-demo-line-chart-card-1-select-dropdown-label dashboard-demo-line-chart-card-1-select-dropdown-toggle"
                      >
                        <div class="pf-v5-c-select__toggle-wrapper">
                          <span class="pf-v5-c-select__toggle-text">24 hours</span>
                        </div>
                        <span class="pf-v5-c-select__toggle-arrow">
                          <i class="fas fa-caret-down" aria-hidden="true"></i>
                        </span>
                      </button>

                      <ul
                        class="pf-v5-c-select__menu pf-m-align-right"
                        role="listbox"
                        aria-labelledby="dashboard-demo-line-chart-card-1-select-dropdown-label"
                        hidden
                      >
                        <li role="presentation">
                          <button
                            class="pf-v5-c-select__menu-item"
                            role="option"
                          >Running</button>
                        </li>
                        <li role="presentation">
                          <button
                            class="pf-v5-c-select__menu-item pf-m-selected"
                            role="option"
                            aria-selected="true"
                          >
                            Stopped
                            <span class="pf-v5-c-select__menu-item-icon">
                              <i class="fas fa-check" aria-hidden="true"></i>
                            </span>
                          </button>
                        </li>
                        <li role="presentation">
                          <button
                            class="pf-v5-c-select__menu-item"
                            role="option"
                          >Down</button>
                        </li>
                        <li role="presentation">
                          <button
                            class="pf-v5-c-select__menu-item"
                            role="option"
                          >Degraded</button>
                        </li>
                        <li role="presentation">
                          <button
                            class="pf-v5-c-select__menu-item"
                            role="option"
                          >Needs maintenance</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="pf-v5-c-card__title"
                    id="dashboard-demo-line-chart-card-1-title"
                  >
                    <h2 class="pf-v5-c-title pf-m-xl">Cluster utilizations</h2>
                  </div>
                </div>
                <div
                  class="pf-v5-c-card pf-m-plain pf-m-expanded"
                  id="dashboard-demo-line-chart-card-1-group-1"
                >
                  <div class="pf-v5-c-card__header pf-m-toggle-right">
                    <div class="pf-v5-c-card__header-toggle">
                      <button
                        class="pf-v5-c-button pf-m-plain"
                        type="button"
                        aria-label="Details"
                        id="dashboard-demo-line-chart-card-1-group-1-toggle"
                        aria-labelledby="dashboard-demo-line-chart-card-1-group-1-title dashboard-demo-line-chart-card-1-group-1-toggle"
                      >
                        <span class="pf-v5-c-card__header-toggle-icon">
                          <i class="fas fa-angle-right" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="pf-v5-c-card__title">
                      <h2
                        class="pf-v5-c-card__title-text"
                        id="dashboard-demo-line-chart-card-1-group-1-title"
                      >CPU 1</h2>
                    </div>
                  </div>
                  <div class="pf-v5-c-card__expandable-content">
                    <div class="pf-v5-c-card__body">
                      <div class="pf-v5-l-grid pf-m-gutter">
                        <div class="pf-v5-l-grid pf-m-gutter">
                          <div class="pf-v5-l-grid__item pf-m-4-col-on-md">
                            <div
                              class="pf-v5-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v5-u-h-100-on-md"
                            >
                              <div class="pf-v5-l-flex__item">
                                <b>Temperature</b>
                              </div>
                              <hr
                                class="pf-v5-c-divider pf-m-vertical pf-m-inset-sm pf-v5-u-hidden-on-md"
                              />
                              <div class="pf-v5-l-flex__item">
                                <span>64C</span>
                              </div>
                            </div>
                          </div>
                          <div class="pf-v5-l-grid__item pf-m-8-col-on-md">
                            <div class="pf-v5-l-grid pf-m-gutter">
                              <div class="pf-v5-l-grid__item pf-m-2-col">
                                <div
                                  class="pf-v5-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                                >
                                  <div class="pf-v5-l-flex__item">100C</div>
                                  <div class="pf-v5-l-flex__item">50C</div>
                                  <div class="pf-v5-l-flex__item">0C</div>
                                </div>
                              </div>
                              <div class="pf-v5-l-grid__item pf-m-10-col">
                                <div class="ws-chart">
                                  <img
                                    src="/assets/images/img_line-chart-2.png"
                                    alt="Line chart"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr class="pf-v5-c-divider pf-v5-u-hidden-on-md" />
                        <div class="pf-v5-l-grid pf-m-gutter">
                          <div class="pf-v5-l-grid__item pf-m-4-col-on-md">
                            <div
                              class="pf-v5-l-flex pf-m-column-on-md pf-m-space-items-none-on-md pf-m-justify-content-center-on-md pf-v5-u-h-100-on-md"
                            >
                              <div class="pf-v5-l-flex__item">
                                <b>Speed</b>
                              </div>
                              <hr
                                class="pf-v5-c-divider pf-m-vertical pf-m-inset-sm pf-v5-u-hidden-on-md"
                              />
                              <div class="pf-v5-l-flex__item">
                                <span>2.3Ghz</span>
                              </div>
                            </div>
                          </div>
                          <div class="pf-v5-l-grid__item pf-m-8-col-on-md">
                            <div class="pf-v5-l-grid pf-m-gutter">
                              <div class="pf-v5-l-grid__item pf-m-2-col">
                                <div
                                  class="pf-v5-l-flex pf-m-column pf-m-space-items-none pf-m-align-items-flex-end-on-md"
                                >
                                  <div class="pf-v5-l-flex__item">36hz</div>
                                  <div class="pf-v5-l-flex__item">1.5Ghz</div>
                                  <div class="pf-v5-l-flex__item">0Ghz</div>
                                </div>
                              </div>
                              <div class="pf-v5-l-grid__item pf-m-10-col">
                                <div class="ws-chart">
                                  <img
                                    src="/assets/images/img_line-chart-2.png"
                                    alt="Line chart"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="pf-v5-c-card pf-m-plain"
                  id="dashboard-demo-line-chart-card-1-group-2"
                >
                  <div class="pf-v5-c-card__header pf-m-toggle-right">
                    <div class="pf-v5-c-card__header-toggle">
                      <button
                        class="pf-v5-c-button pf-m-plain"
                        type="button"
                        aria-label="Details"
                        id="dashboard-demo-line-chart-card-1-group-2-toggle"
                        aria-labelledby="dashboard-demo-line-chart-card-1-group-2-title dashboard-demo-line-chart-card-1-group-2-toggle"
                      >
                        <span class="pf-v5-c-card__header-toggle-icon">
                          <i class="fas fa-angle-right" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="pf-v5-c-card__title">
                      <h2
                        class="pf-v5-c-card__title-text"
                        id="dashboard-demo-line-chart-card-1-group-2-title"
                      >Pod count</h2>
                    </div>
                  </div>
                </div>
                <div
                  class="pf-v5-c-card pf-m-plain"
                  id="dashboard-demo-line-chart-card-1-group-3"
                >
                  <div class="pf-v5-c-card__header pf-m-toggle-right">
                    <div class="pf-v5-c-card__header-toggle">
                      <button
                        class="pf-v5-c-button pf-m-plain"
                        type="button"
                        aria-label="Details"
                        id="dashboard-demo-line-chart-card-1-group-3-toggle"
                        aria-labelledby="dashboard-demo-line-chart-card-1-group-3-title dashboard-demo-line-chart-card-1-group-3-toggle"
                      >
                        <span class="pf-v5-c-card__header-toggle-icon">
                          <i class="fas fa-angle-right" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="pf-v5-c-card__title">
                      <h2
                        class="pf-v5-c-card__title-text"
                        id="dashboard-demo-line-chart-card-1-group-3-title"
                      >Memory</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pf-v5-c-card">
                <div class="pf-v5-c-card__title">
                  <h2 class="pf-v5-c-title pf-m-xl">Recomendations by severity</h2>
                </div>
                <div class="pf-v5-c-card__body">
                  <div class="pf-v5-l-flex pf-m-inline-flex">
                    <div class="pf-v5-l-grid pf-m-gutter pf-m-all-3-col">
                      <div
                        class="pf-v5-l-flex pf-m-column pf-m-space-items-xs pf-m-align-items-center"
                      >
                        <span
                          class="pf-v5-u-font-size-2xl pf-v5-u-primary-color-100"
                        >2</span>
                        <span class="pf-v5-u-font-color-200">Critical</span>
                      </div>
                      <div
                        class="pf-v5-l-flex pf-m-column pf-m-space-items-xs pf-m-align-items-center"
                      >
                        <span
                          class="pf-v5-u-font-size-2xl pf-v5-u-primary-color-100"
                        >5</span>
                        <span class="pf-v5-u-font-color-200">Important</span>
                      </div>
                      <div
                        class="pf-v5-l-flex pf-m-column pf-m-space-items-xs pf-m-align-items-center"
                      >
                        <span
                          class="pf-v5-u-font-size-2xl pf-v5-u-primary-color-100"
                        >7</span>
                        <span class="pf-v5-u-font-color-200">Moderate</span>
                      </div>
                      <div
                        class="pf-v5-l-flex pf-m-column pf-m-space-items-xs pf-m-align-items-center"
                      >
                        <span
                          class="pf-v5-u-font-size-2xl pf-v5-u-primary-color-100"
                        >12</span>
                        <span class="pf-v5-u-font-color-200">Low</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pf-v5-c-card__title">
                  <h2 class="pf-v5-c-title pf-m-xl">Recomendations by category</h2>
                </div>
                <div class="pf-v5-c-card__body">
                  <img
                    src="/assets/images/img_pie-chart-with-legend.png"
                    alt="Pie chart"
                    width="450"
                  />
                </div>
                <div class="pf-v5-c-card__footer">
                  <a href="#">View more</a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pf-v5-l-grid__item pf-m-gutter pf-m-4-col-on-lg pf-m-3-col-on-2xl"
            style="--pf-v5-l-grid--item--Order-on-lg:2"
          >
            <div
              class="pf-v5-l-flex pf-m-column pf-m-row-on-md pf-m-column-on-lg"
            >
              <div class="pf-v5-l-flex__item pf-m-flex-1">
                <div class="pf-v5-c-card" id="dashboard-demo-details-card-1">
                  <div class="pf-v5-c-card__title">
                    <h2 class="pf-v5-c-title pf-m-xl">Details</h2>
                  </div>
                  <div class="pf-v5-c-card__body">
                    <dl class="pf-v5-c-description-list">
                      <div class="pf-v5-c-description-list__group">
                        <dt
                          class="pf-v5-c-description-list__term"
                        >Cluster API Address</dt>
                        <dd class="pf-v5-c-description-list__description">
                          <div class="pf-v5-c-description-list__text">
                            <a href="#">https://api1.devcluster.openshift.com</a>
                          </div>
                        </dd>
                      </div>
                      <div class="pf-v5-c-description-list__group">
                        <dt class="pf-v5-c-description-list__term">Cluster ID</dt>
                        <dd class="pf-v5-c-description-list__description">
                          <div
                            class="pf-v5-c-description-list__text"
                          >63b97ac1-b850-41d9-8820-239becde9e86</div>
                        </dd>
                      </div>
                      <div class="pf-v5-c-description-list__group">
                        <dt class="pf-v5-c-description-list__term">Provider</dt>
                        <dd class="pf-v5-c-description-list__description">
                          <div class="pf-v5-c-description-list__text">AWS</div>
                        </dd>
                      </div>
                      <div class="pf-v5-c-description-list__group">
                        <dt
                          class="pf-v5-c-description-list__term"
                        >OpenShift Version</dt>
                        <dd class="pf-v5-c-description-list__description">
                          <div
                            class="pf-v5-c-description-list__text"
                          >4.5.0.ci-2020-06-16-015028</div>
                        </dd>
                      </div>
                      <div class="pf-v5-c-description-list__group">
                        <dt
                          class="pf-v5-c-description-list__term"
                        >Update Channel</dt>
                        <dd class="pf-v5-c-description-list__description">
                          <div class="pf-v5-c-description-list__text">stable-4.5</div>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <hr class="pf-v5-c-divider" />
                  <div class="pf-v5-c-card__footer">
                    <a href="#">View Settings</a>
                  </div>
                </div>
              </div>
              <div class="pf-v5-l-flex__item pf-m-flex-1">
                <div class="pf-v5-c-card" id="dashboard-demo-data-list-card-1">
                  <div
                    class="pf-v5-c-card__header pf-v5-u-align-items-flex-start"
                  >
                    <div
                      class="pf-v5-c-card__title"
                      id="dashboard-demo-data-list-card-1-title1"
                    >
                      <h2 class="pf-v5-c-title pf-m-lg">Inventory</h2>
                    </div>
                  </div>
                  <ul
                    class="pf-v5-c-data-list pf-m-grid-none"
                    role="list"
                    aria-label="Simple data list example"
                    id="dashboard-demo-data-list-card-1-data-list"
                  >
                    <li
                      class="pf-v5-c-data-list__item"
                      aria-labelledby="dashboard-demo-data-list-card-1-data-list-item-1"
                    >
                      <div class="pf-v5-c-data-list__item-row">
                        <div class="pf-v5-c-data-list__item-content">
                          <div
                            class="pf-v5-c-data-list__cell"
                            id="dashboard-demo-data-list-card-1-data-list-item-1"
                          >3 Nodes</div>
                          <div
                            class="pf-v5-c-data-list__cell pf-m-no-fill pf-m-align-right"
                          >
                            <a href="#">
                              <div class="pf-v5-l-flex pf-m-space-items-sm">
                                <span>3</span>
                                <i
                                  class="fas fa-check-circle pf-v5-u-success-color-100"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="pf-v5-c-data-list__item"
                      aria-labelledby="dashboard-demo-data-list-card-1-data-list-item-2"
                    >
                      <div class="pf-v5-c-data-list__item-row">
                        <div class="pf-v5-c-data-list__item-content">
                          <div
                            class="pf-v5-c-data-list__cell"
                            id="dashboard-demo-data-list-card-1-data-list-item-2"
                          >8 Disks</div>
                          <div
                            class="pf-v5-c-data-list__cell pf-m-no-fill pf-m-align-right"
                          >
                            <a href="#">
                              <div class="pf-v5-l-flex pf-m-space-items-sm">
                                <span>8</span>
                                <i
                                  class="fas fa-check-circle pf-v5-u-success-color-100"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="pf-v5-c-data-list__item"
                      aria-labelledby="dashboard-demo-data-list-card-1-data-list-item-3"
                    >
                      <div class="pf-v5-c-data-list__item-row">
                        <div class="pf-v5-c-data-list__item-content">
                          <div
                            class="pf-v5-c-data-list__cell"
                            id="dashboard-demo-data-list-card-1-data-list-item-3"
                          >20 Pods</div>
                          <div
                            class="pf-v5-c-data-list__cell pf-m-no-fill pf-m-align-right"
                          >
                            <a href="#">
                              <div class="pf-v5-l-flex pf-m-space-items-sm">
                                <span>20</span>
                                <i
                                  class="fas fa-check-circle pf-v5-u-success-color-100"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="pf-v5-c-data-list__item"
                      aria-labelledby="dashboard-demo-data-list-card-1-data-list-item-4"
                    >
                      <div class="pf-v5-c-data-list__item-row">
                        <div class="pf-v5-c-data-list__item-content">
                          <div
                            class="pf-v5-c-data-list__cell"
                            id="dashboard-demo-data-list-card-1-data-list-item-4"
                          >12 PVs</div>
                          <div
                            class="pf-v5-c-data-list__cell pf-m-no-fill pf-m-align-right"
                          >
                            <a href="#">
                              <div class="pf-v5-l-flex pf-m-space-items-sm">
                                <span>12</span>
                                <i
                                  class="fas fa-check-circle pf-v5-u-success-color-100"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="pf-v5-c-data-list__item"
                      aria-labelledby="dashboard-demo-data-list-card-1-data-list-item-5"
                    >
                      <div class="pf-v5-c-data-list__item-row">
                        <div class="pf-v5-c-data-list__item-content">
                          <div
                            class="pf-v5-c-data-list__cell"
                            id="dashboard-demo-data-list-card-1-data-list-item-5"
                          >18 PVCs</div>
                          <div
                            class="pf-v5-c-data-list__cell pf-m-no-fill pf-m-align-right"
                          >
                            <a href="#">
                              <div class="pf-v5-l-flex pf-m-space-items-sm">
                                <span>18</span>
                                <i
                                  class="fas fa-check-circle pf-v5-u-success-color-100"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pf-v5-l-grid__item pf-m-4-col-on-lg pf-m-3-col-on-2xl"
            style="--pf-v5-l-grid--item--Order-on-lg:4"
          >
            <div class="pf-v5-l-flex pf-m-column">
              <div class="pf-v5-c-card" id="dashboard-demo-events-card-1">
                <div class="pf-v5-c-card__header">
                  <div class="pf-v5-c-card__actions pf-m-no-offset">
                    <div class="pf-v5-c-select">
                      <span
                        id="dashboard-demo-events-card-1-select-dropdown-label"
                        hidden
                      >Choose one</span>

                      <button
                        class="pf-v5-c-select__toggle pf-m-plain"
                        type="button"
                        id="dashboard-demo-events-card-1-select-dropdown-toggle"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-labelledby="dashboard-demo-events-card-1-select-dropdown-label dashboard-demo-events-card-1-select-dropdown-toggle"
                      >
                        <div class="pf-v5-c-select__toggle-wrapper">
                          <span class="pf-v5-c-select__toggle-text">Status</span>
                        </div>
                        <span class="pf-v5-c-select__toggle-arrow">
                          <i class="fas fa-caret-down" aria-hidden="true"></i>
                        </span>
                      </button>

                      <ul
                        class="pf-v5-c-select__menu pf-m-align-right"
                        role="listbox"
                        aria-labelledby="dashboard-demo-events-card-1-select-dropdown-label"
                        hidden
                      >
                        <li role="presentation">
                          <button
                            class="pf-v5-c-select__menu-item"
                            role="option"
                          >Running</button>
                        </li>
                        <li role="presentation">
                          <button
                            class="pf-v5-c-select__menu-item pf-m-selected"
                            role="option"
                            aria-selected="true"
                          >
                            Stopped
                            <span class="pf-v5-c-select__menu-item-icon">
                              <i class="fas fa-check" aria-hidden="true"></i>
                            </span>
                          </button>
                        </li>
                        <li role="presentation">
                          <button
                            class="pf-v5-c-select__menu-item"
                            role="option"
                          >Down</button>
                        </li>
                        <li role="presentation">
                          <button
                            class="pf-v5-c-select__menu-item"
                            role="option"
                          >Degraded</button>
                        </li>
                        <li role="presentation">
                          <button
                            class="pf-v5-c-select__menu-item"
                            role="option"
                          >Needs maintenance</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="pf-v5-c-card__title"
                    id="dashboard-demo-events-card-1-title1"
                    style="padding-block-start: 3px;"
                  >
                    <h2 class="pf-v5-c-title pf-m-xl">Events</h2>
                  </div>
                </div>
                <div class="pf-v5-c-card__body">
                  <dl class="pf-v5-c-description-list pf-m-compact">
                    <div class="pf-v5-c-description-list__group">
                      <dt class="pf-v5-c-description-list__term">
                        <div class="pf-v5-l-flex pf-m-nowrap">
                          <div class="pf-v5-l-flex__item pf-m-spacer-sm">
                            <i
                              class="fas fa-exclamation-circle pf-v5-u-danger-color-100"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="pf-v5-l-flex__item">Readiness probe failed</div>
                        </div>
                      </dt>
                      <dd class="pf-v5-c-description-list__description">
                        <div
                          class="pf-v5-c-description-list__text"
                        >Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect: connection refused</div>
                      </dd>
                      <dd class="pf-v5-c-description-list__description">
                        <div class="pf-v5-c-description-list__text">
                          <time
                            class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
                          >Jun 17, 11:02 am</time>
                        </div>
                      </dd>
                    </div>
                    <div class="pf-v5-c-description-list__group">
                      <dt class="pf-v5-c-description-list__term">
                        <div class="pf-v5-l-flex pf-m-nowrap">
                          <div class="pf-v5-l-flex__item pf-m-spacer-sm">
                            <i
                              class="fas fa-check-circle pf-v5-u-success-color-100"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="pf-v5-l-flex__item">Successful assignment</div>
                        </div>
                      </dt>
                      <dd class="pf-v5-c-description-list__description">
                        <div
                          class="pf-v5-c-description-list__text"
                        >Successfully assigned default/example to ip-10-0-130-149.ec2.internal</div>
                      </dd>
                      <dd class="pf-v5-c-description-list__description">
                        <div class="pf-v5-c-description-list__text">
                          <time
                            class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
                          >Jun 17, 11:13 am</time>
                        </div>
                      </dd>
                    </div>
                    <div class="pf-v5-c-description-list__group">
                      <dt class="pf-v5-c-description-list__term">
                        <div class="pf-v5-l-flex pf-m-nowrap">
                          <div class="pf-v5-l-flex__item pf-m-spacer-sm">
                            <svg
                              class="pf-v5-c-spinner pf-m-md"
                              role="progressbar"
                              viewBox="0 0 100 100"
                              aria-label="Loading"
                            >
                              <circle
                                class="pf-v5-c-spinner__path"
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                              />
                            </svg>
                          </div>
                          <div class="pf-v5-l-flex__item">Pulling image</div>
                        </div>
                      </dt>
                      <dd class="pf-v5-c-description-list__description">
                        <div
                          class="pf-v5-c-description-list__text"
                        >Pulling image "openshift/hello-openshift"</div>
                      </dd>
                      <dd class="pf-v5-c-description-list__description">
                        <div class="pf-v5-c-description-list__text">
                          <time
                            class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
                          >Jun 17, 10:59 am</time>
                        </div>
                      </dd>
                    </div>
                    <div class="pf-v5-c-description-list__group">
                      <dt class="pf-v5-c-description-list__term">
                        <div class="pf-v5-l-flex pf-m-nowrap">
                          <div class="pf-v5-l-flex__item pf-m-spacer-sm">
                            <i
                              class="fas fa-check-circle pf-v5-u-success-color-100"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="pf-v5-l-flex__item">Created container</div>
                        </div>
                      </dt>
                      <dd class="pf-v5-c-description-list__description">
                        <div
                          class="pf-v5-c-description-list__text"
                        >Created container hello-openshift</div>
                      </dd>
                      <dd class="pf-v5-c-description-list__description">
                        <div class="pf-v5-c-description-list__text">
                          <time
                            class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
                          >Jun 17, 10:45 am</time>
                        </div>
                      </dd>
                    </div>

                    <div class="pf-v5-c-description-list__group">
                      <dt class="pf-v5-c-description-list__term">
                        <div class="pf-v5-l-flex pf-m-nowrap">
                          <div class="pf-v5-l-flex__item pf-m-spacer-sm">
                            <i
                              class="fas fa-exclamation-triangle pf-v5-u-warning-color-100"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div
                            class="pf-v5-l-flex__item"
                          >CPU utilitization over 50%</div>
                        </div>
                      </dt>
                      <dd class="pf-v5-c-description-list__description">
                        <div
                          class="pf-v5-c-description-list__text"
                        >Migrated 2 pods to other hosts</div>
                      </dd>
                      <dd class="pf-v5-c-description-list__description">
                        <div class="pf-v5-c-description-list__text">
                          <time
                            class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
                          >Jun 17, 10:33 am</time>
                        </div>
                      </dd>
                    </div>

                    <div class="pf-v5-c-description-list__group">
                      <dt class="pf-v5-c-description-list__term">
                        <div class="pf-v5-l-flex pf-m-nowrap">
                          <div class="pf-v5-l-flex__item pf-m-spacer-sm">
                            <i
                              class="fas fa-exclamation-circle pf-v5-u-danger-color-100"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="pf-v5-l-flex__item">Rook-osd-10-328949</div>
                        </div>
                      </dt>
                      <dd class="pf-v5-c-description-list__description">
                        <div
                          class="pf-v5-c-description-list__text"
                        >Rebuild initiated as Disk 5 failed</div>
                      </dd>
                      <dd class="pf-v5-c-description-list__description">
                        <div class="pf-v5-c-description-list__text">
                          <time
                            class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
                          >Jun 17, 10:33 am</time>
                        </div>
                      </dd>
                    </div>

                    <div class="pf-v5-c-description-list__group">
                      <dt class="pf-v5-c-description-list__term">
                        <div class="pf-v5-l-flex pf-m-nowrap">
                          <div class="pf-v5-l-flex__item pf-m-spacer-sm">
                            <i
                              class="fas fa-check-circle pf-v5-u-success-color-100"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="pf-v5-l-flex__item">Created container</div>
                        </div>
                      </dt>
                      <dd class="pf-v5-c-description-list__description">
                        <div
                          class="pf-v5-c-description-list__text"
                        >Created container hello-openshift-123</div>
                      </dd>
                      <dd class="pf-v5-c-description-list__description">
                        <div class="pf-v5-c-description-list__text">
                          <time
                            class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
                          >Jun 17, 10:31 am</time>
                        </div>
                      </dd>
                    </div>

                    <div class="pf-v5-c-description-list__group">
                      <dt class="pf-v5-c-description-list__term">
                        <div class="pf-v5-l-flex pf-m-nowrap">
                          <div class="pf-v5-l-flex__item pf-m-spacer-sm">
                            <i
                              class="fas fa-check-circle pf-v5-u-success-color-100"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div class="pf-v5-l-flex__item">Created container</div>
                        </div>
                      </dt>
                      <dd class="pf-v5-c-description-list__description">
                        <div
                          class="pf-v5-c-description-list__text"
                        >Created container hello-openshift-456</div>
                      </dd>
                      <dd class="pf-v5-c-description-list__description">
                        <div class="pf-v5-c-description-list__text">
                          <time
                            class="pf-v5-u-color-200 pf-v5-u-font-size-sm"
                          >Jun 17, 10:30 am</time>
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>
                <hr class="pf-v5-c-divider" />
                <div class="pf-v5-c-card__footer">
                  <a href="#">View all events</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
*/
}

{
  /* <Page>
  <SkipToContent href="#main-content-dashboard-demo">Skip to content</SkipToContent>
  <Masthead id="dashboard-demo-masthead">
    <MastheadToggle>
      <Button variant="plain" aria-label="Global navigation">
        <BarsIcon />
      </Button>
    </MastheadToggle>
    <MastheadMain>
      <MastheadBrand>
        <Brand src="/assets/images/pf-logo.svg" alt="PatternFly logo" />
      </MastheadBrand>
      <MastheadContent>
        <Toolbar id="dashboard-demo-toolbar">
          <ToolbarContent>
            <ToolbarGroup>
              <ToolbarGroup>
                <ToolbarItem>
                  <MenuToggle variant="plain" aria-label="Application launcher">
                    <ThIcon />
                  </MenuToggle>
                </ToolbarItem>
                <ToolbarItem>
                  <MenuToggle variant="plain" aria-label="Settings">
                    <CogIcon />
                  </MenuToggle>
                </ToolbarItem>
                <ToolbarItem>
                  <MenuToggle variant="plain" aria-label="Help">
                    <QuestionCircleIcon />
                  </MenuToggle>
                </ToolbarItem>
              </ToolbarGroup>
              <ToolbarItem visibility={{ lg: 'hidden' }}>
                <MenuToggle variant="plain" aria-label="Actions">
                  <EllipsisVIcon />
                </MenuToggle>
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarItem visibility={{ md: 'hidden' }}>
              <MenuToggle
                className="pf-m-full-height"
                icon={
                  <Icon>
                    <UserIcon />
                  </Icon>
                }
              >
                Ned Username
              </MenuToggle>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </MastheadMain>
  </Masthead>
</Page>; */
}
