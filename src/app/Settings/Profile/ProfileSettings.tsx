import * as React from 'react';
import { CompassContent, Panel, Title } from '@patternfly/react-core';
import { useDocumentTitle } from '@app/utils/useDocumentTitle';

const ProfileSettings: React.FunctionComponent = () => {
  useDocumentTitle('Profile Settings');

  return (
    <>
      <CompassContent>
        <Panel>
          <Title headingLevel="h1">Profile Settings</Title>
          Some profile settings stuff here...
        </Panel>
      </CompassContent>
    </>
  );
};

export { ProfileSettings };
