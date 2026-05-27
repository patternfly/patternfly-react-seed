import * as React from 'react';
import { CompassContent, Form, FormGroup, Panel, Switch, Title } from '@patternfly/react-core';
import { useDocumentTitle } from '@app/utils/useDocumentTitle';
import { useTheme } from '@app/utils/ThemeContext';

const GeneralSettings: React.FunctionComponent = () => {
  useDocumentTitle('General Settings');
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
      <CompassContent>
        <Panel>
          <Title headingLevel="h1">General Settings</Title>
          <Form>
          <FormGroup label="Theme" fieldId="theme-toggle">
            <Switch
              id="theme-toggle"
              label={isDarkTheme ? 'Dark mode enabled' : 'Light mode enabled'}
              isChecked={isDarkTheme}
              onChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
          </FormGroup>
          </Form>
        </Panel>
      </CompassContent>
    </>
  );
};

export { GeneralSettings };
