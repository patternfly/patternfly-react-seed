import { useAuth0 } from '@auth0/auth0-react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownItem,
  DropdownList,
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadLogo,
  MastheadMain,
  MastheadToggle,
  MenuToggle,
  MenuToggleElement,
  Nav,
  NavExpandable,
  NavItem,
  NavList,
  Page,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import { BarsIcon } from '@patternfly/react-icons';
import { BellIcon } from '@patternfly/react-icons';
import { CogIcon } from '@patternfly/react-icons';
import { QuestionCircleIcon } from '@patternfly/react-icons';
import * as React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../bgimages/logo-nb.svg';
import { IAppRoute, IAppRouteGroup, routes } from './routes';

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const headerToolbar = React.useMemo(
    () => (
      <Toolbar id="toolbar" isStatic>
        <ToolbarContent>
          <ToolbarGroup
            variant="action-group-plain"
            align={{ default: 'alignEnd' }}
            gap={{ default: 'gapNone', md: 'gapMd' }}
          >
            <ToolbarItem>
              <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} />
            </ToolbarItem>
            <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
              <ToolbarItem>
                <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
              </ToolbarItem>
              <ToolbarItem>
                <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarGroup>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
            {isAuthenticated ? (
              <Dropdown
                isOpen={isDropdownOpen}
                onSelect={() => setIsDropdownOpen(false)}
                onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    isExpanded={isDropdownOpen}
                    icon={<Avatar src={user?.picture} alt="" size="sm" />}
                  >
                    {user?.name}
                  </MenuToggle>
                )}
              >
                <DropdownList>
                  <DropdownItem key="user" onClick={() => navigate('/user')}>
                    Perfil
                  </DropdownItem>
                  <DropdownItem key="logout" onClick={logout}>
                    Logout
                  </DropdownItem>
                </DropdownList>
              </Dropdown>
            ) : (
              <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    ),
    [isAuthenticated, isDropdownOpen, loginWithRedirect, logout, navigate, user?.name, user?.picture],
  );

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <Button
            icon={<BarsIcon />}
            variant="plain"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Global navigation"
          />
        </MastheadToggle>
        <MastheadBrand data-codemods>
          <MastheadLogo data-codemods>
            <Brand src={Logo} alt="PatternFly" heights={{ default: '36px' }} onClick={() => navigate('/')} />
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const renderNavItem = (route: IAppRoute, index: number) => (
    <NavItem key={`${route.label}-${index}`} id={`${route.label}-${index}`} isActive={route.path === location.pathname}>
      <NavLink to={route.path}>{route.label}</NavLink>
    </NavItem>
  );

  const renderNavGroup = (group: IAppRouteGroup, groupIndex: number) => (
    <NavExpandable
      key={`${group.label}-${groupIndex}`}
      id={`${group.label}-${groupIndex}`}
      title={group.label}
      isActive={group.routes.some((route) => route.path === location.pathname)}
    >
      {group.routes.map((route, idx) => route.label && renderNavItem(route, idx))}
    </NavExpandable>
  );

  const Navigation = (
    <Nav id="nav-primary-simple">
      <NavList id="nav-list-simple">
        {routes.map(
          (route, idx) => route.label && (!route.routes ? renderNavItem(route, idx) : renderNavGroup(route, idx)),
        )}
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar>
      <PageSidebarBody>{Navigation}</PageSidebarBody>
    </PageSidebar>
  );

  const pageId = 'primary-app-container';

  const PageSkipToContent = (
    <SkipToContent
      onClick={(event) => {
        event.preventDefault();
        const primaryContentContainer = document.getElementById(pageId);
        primaryContentContainer && primaryContentContainer.focus();
      }}
      href={`#${pageId}`}
    >
      Skip to Contentgrac
    </SkipToContent>
  );
  return (
    <Page
      mainContainerId={pageId}
      masthead={masthead}
      sidebar={sidebarOpen && Sidebar}
      skipToContent={PageSkipToContent}
    >
      {children}
    </Page>
  );
};

export { AppLayout };
