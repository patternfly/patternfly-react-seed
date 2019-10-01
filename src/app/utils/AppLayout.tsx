import * as React from 'react';
import {
  Nav,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSidebar,
  SkipToContent,
  PageHeaderProps,
} from '@patternfly/react-core';
import {
  AppNavItem,
  AppNavGroup,
  AppNavExpandable,
  IAppNavExpandableProps,
  IAppNavGroupProps,
  IAppNavItemProps
} from '@app/utils';

export interface IAppLayoutContext {
  setBreadcrumb: (breadcrumb: React.ReactNode) => void;
}
export const AppLayoutContext = React.createContext<IAppLayoutContext>({
  setBreadcrumb: (b: React.ReactNode) => void(0)
});

export interface IAppLayoutProps
  extends Pick<PageHeaderProps, 'logo'>,
    Pick<PageHeaderProps, 'logoProps'>,
    Pick<PageHeaderProps, 'avatar'>,
    Pick<PageHeaderProps, 'toolbar'> {
  navVariant: 'vertical' | 'horizontal';
  navItems: Array<IAppNavItemProps | IAppNavExpandableProps | IAppNavGroupProps | undefined>;
  navGroupsStyle: 'grouped' | 'expandable';
  startWithOpenNav?: boolean;
  theme?: 'dark' | 'light';
}

export const AppLayout: React.FunctionComponent<IAppLayoutProps> = ({
  logo,
  logoProps,
  navVariant,
  navItems,
  navGroupsStyle,
  toolbar,
  avatar,
  startWithOpenNav = true,
  theme = 'dark',
  children,
}) => {
  const [isNavOpen, setIsNavOpen] = React.useState(startWithOpenNav);
  const [isMobileView, setIsMobileView] = React.useState(true);
  const [isNavOpenMobile, setIsNavOpenMobile] = React.useState(false);
  const [breadcrumb, setBreadcrumb] = React.useState<React.ReactNode | undefined>();

  const onNavToggleMobile = () => {
    setIsNavOpenMobile(!isNavOpenMobile);
  };
  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
    setIsMobileView(props.mobileView);
  };

  React.useEffect(() => {
    setIsNavOpen(startWithOpenNav);
  }, [startWithOpenNav, setIsNavOpen]);

  const isVertical = navVariant === 'vertical';
  const variant = isVertical ? NavVariants.default : NavVariants.horizontal;

  const Navigation = (
    <Nav id="nav-primary-simple" theme={theme}>
      <NavList id="nav-list-simple" variant={variant}>
        {navItems.map((navItem, idx) => {
          if (navItem && navItem.hasOwnProperty('items') && isVertical) {
            return navGroupsStyle === 'expandable'
              ? <AppNavExpandable {...navItem as IAppNavExpandableProps} key={idx} />
              : <AppNavGroup {...navItem as IAppNavGroupProps} key={idx} />
          } else {
            return <AppNavItem {...navItem as IAppNavItemProps} key={idx} />
          }
        })}
      </NavList>
    </Nav>
  );

  const Header = (
    <PageHeader
      logo={logo}
      logoProps={logoProps}
      avatar={avatar}
      toolbar={toolbar}
      showNavToggle={isVertical}
      isNavOpen={isVertical ? isNavOpen : undefined}
      onNavToggle={isMobileView ? onNavToggleMobile : onNavToggle}
      topNav={isVertical ? undefined : Navigation}
    />
  );

  const Sidebar =
    navVariant === 'vertical' ? (
      <PageSidebar
        nav={Navigation}
        isNavOpen={isMobileView ? isNavOpenMobile : isNavOpen}
        theme={theme}
        data-testid="app-sidebar"
      />
    ) : undefined;

  const PageSkipToContent = <SkipToContent href="#primary-app-container">Skip to Content</SkipToContent>;

  return (
    <AppLayoutContext.Provider value={{ setBreadcrumb }}>
      <Page
        mainContainerId="primary-app-container"
        header={Header}
        sidebar={Sidebar}
        breadcrumb={breadcrumb}
        onPageResize={onPageResize}
        skipToContent={PageSkipToContent}
      >
        {children}
      </Page>
    </AppLayoutContext.Provider>
  );
};
