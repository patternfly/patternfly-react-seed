import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';

import { AppLayout } from '@app/utils/AppLayout';
import { PageSection, Toolbar, ToolbarGroup, ToolbarItem, Button, ButtonVariant, Dropdown, KebabToggle, DropdownToggle, Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import { useBreadcrumb } from '@app/utils/index';

const stories = storiesOf('Utils', module);
stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

const PageToolbar = (
  <Toolbar>
    <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
      <ToolbarItem>
        <Button id="groups-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
          <BellIcon />
        </Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button id="groups-example-uid-02" aria-label="Setings actions" variant={ButtonVariant.plain}>
          <CogIcon />
        </Button>
      </ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
        <Dropdown
          isPlain
          position="right"
          onSelect={action('Kebab onSelect')}
          toggle={<KebabToggle onToggle={action('Kebab onToggle')} />}
          isOpen={false}
          dropdownItems={[]}
        />
      </ToolbarItem>
      <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
        <Dropdown
          isPlain
          position="right"
          onSelect={action('Dropdown onSelect')}
          isOpen={false}
          toggle={<DropdownToggle onToggle={action('Dropdown onToggle')}>Kyle Baker</DropdownToggle>}
          dropdownItems={[]}
        />
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
);

const SamplePage = () => {
  const getBreadcrumb = React.useCallback(() => (
    <Breadcrumb>
      <BreadcrumbItem><Link to={'.'}>Section Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to={'.'}>Section Title</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to={'.'}>Section Title</Link></BreadcrumbItem>
      <BreadcrumbItem isActive>
        Section Landing
      </BreadcrumbItem>
    </Breadcrumb>
  ), []);
  useBreadcrumb(getBreadcrumb);
  return (
    <PageSection variant={'light'}>
      <div style={{ height: '100vh'}}>
        Content that overflows
      </div>
    </PageSection>
  )
};

const navigationStyles = {
  Vertical: 'vertical',
  Horizontal: 'horizontal',
};

const navGroupStyles = {
  Grouped: 'grouped',
  Expandable: 'expandable',
};

const themes = {
  Dark: 'dark',
  Light: 'light',
};

stories.add(
  'AppLayout',
  () => (
    <MemoryRouter>
      <AppLayout
        logo={text('Logo', 'PatternFly Seed')}
        logoProps={{
          onClick: action('Logo clicked')
        }}
        avatar={text('Avatar', '👱')}
        toolbar={boolean('With sample toolbar', true) && PageToolbar}
        navVariant={select('Navigation style', navigationStyles, 'vertical') as 'vertical' | 'horizontal'}
        navItems={[
          {
            title: 'Samples',
            to: '/samples/',
            items: [
              { to: '/samples/foo', title: 'Foo' },
              undefined,
              { to: '/samples/bar', title: 'Bar' },
              { to: '/samples/baz', title: 'Baz' },
            ],
          },
          { to: '/support', title: 'Support' },
          { to: '/something', title: 'Something' },
        ]}
        navGroupsStyle={select('Navigation group style', navGroupStyles, 'expandable') as 'grouped' | 'expandable'}
        startWithOpenNav={boolean('Start with the sidebar navigation visible (vertical mode and desktop viewport only)', true)}
        theme={select('Theme', themes, 'dark') as 'dark' | 'light'}
      >
        <SamplePage />
      </AppLayout>
    </MemoryRouter>
  ),
);
