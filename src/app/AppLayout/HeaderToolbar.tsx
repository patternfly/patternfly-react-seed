import { User } from '@auth0/auth0-spa-js';
import {
  Avatar,
  Button,
  ButtonVariant,
  Card,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownList,
  Grid,
  GridItem,
  MenuToggle,
  MenuToggleElement,
  Skeleton,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import { BellIcon, CogIcon, QuestionCircleIcon, UserIcon } from '@patternfly/react-icons';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

type HeaderToolbarProps = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user?: User;
  login: () => void;
  logout: () => void;
};
const HeaderToolbar = ({ isLoading, isAuthenticated, user, login, logout }: HeaderToolbarProps) => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
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
          {(() => {
            switch (true) {
              case isLoading:
                return (
                  <Card>
                    <CardHeader style={{ margin: 8, padding: 0 }}>
                      <Grid>
                        <GridItem span={2}>
                          <Skeleton shape="circle" width="22px" screenreaderText="Loading small circle contents" />
                        </GridItem>
                        <GridItem span={10}>
                          <Skeleton screenreaderText="Loading user" width="150px" />
                        </GridItem>
                      </Grid>
                    </CardHeader>
                  </Card>
                );
              case isAuthenticated:
                return (
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
                );
              default:
                return <Button aria-label="Log In" variant={ButtonVariant.plain} icon={<UserIcon />} onClick={login} />;
            }
          })()}
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );
};

export { HeaderToolbar };
