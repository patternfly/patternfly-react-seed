import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { View } from '@app/View/View';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'View',
  () => <View />,
  { info: { inline: true } }
);
