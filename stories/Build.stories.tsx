import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Build } from '@app/Build/Build';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'Build',
  () => <Build />,
  { info: { inline: true } }
);
