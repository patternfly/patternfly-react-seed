import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Support } from '@app/components/index';

const stories = storiesOf('Support', module);
stories.addDecorator(withInfo);
stories.add(
  'Support',
  () => <Support />,
);
