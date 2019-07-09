import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavList,
  NavItem,
  NavItemSeparator,
  NavVariants,
  Page,
  PageHeader,
  PageSidebar,
  SkipToContent
} from '@patternfly/react-core';
import '@app/app.css';

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({children}) => {
  const logoProps = {
    href: '/',
    target: '_blank'
  };
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const [isMobileView, setIsMobileView] = React.useState(true);
  const [isNavOpenMobile, setIsNavOpenMobile] = React.useState(false);
  const onNavToggleMobile = () => {
    setIsNavOpenMobile(!isNavOpenMobile);
  };
  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  }
  const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
    setIsMobileView(props.mobileView);
  };
  const Header = (
    <PageHeader
      logo="Patternfly"
      logoProps={logoProps}
      toolbar="Toolbar"
      showNavToggle={true}
      isNavOpen={isNavOpen}
      onNavToggle={isMobileView ? onNavToggleMobile : onNavToggle}
    />
  );

  const Navigation = (
    <Nav id="nav-primary-simple">
      <NavList id="nav-list-simple" variant={NavVariants.simple}>
        <NavItem
          id="dashboard-link"
          itemId={'dashboard'}>
          <NavLink
            to="/dashboard"
            activeClassName="pf-m-current">Dashboard</NavLink>
        </NavItem>
        <NavItem
          id="support-link"
          itemId={'support'}>
          <NavLink
            to="/support"
            activeClassName="pf-m-current">Support</NavLink>
        </NavItem>
        <NavItemSeparator />
        <NavItem
          id="404-link"
          itemId={'404'}>
          <NavLink
            to="/asdf"
            activeClassName="pf-m-current">Bad Route</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
  const Sidebar = (
    <PageSidebar
      nav={Navigation}
      isNavOpen={isMobileView ? isNavOpenMobile : isNavOpen} />
  );
  const PageSkipToContent = (
    <SkipToContent href="#main-content-page-layout-default-nav">
      Skip to Content
    </SkipToContent>
  );
  return (
    <Page
      header={Header}
      sidebar={Sidebar}
      onPageResize={onPageResize}
      skipToContent={PageSkipToContent}>
      {children}
    </Page>
  );
}

export { AppLayout };
