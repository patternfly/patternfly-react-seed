import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import { DashboardLayout, DashboardSimple, DashboardParams } from '@app/components/index';
import { MemoryRouter } from 'react-router';

const stories = storiesOf('Components/Dashboard', module);
stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add(
  'Layout',
  () => (
    <MemoryRouter>
      <DashboardLayout />
    </MemoryRouter>
  ),
);

stories.add(
  'Simple',
  () => <DashboardSimple />,
);

stories.add(
  'Params',
  () => <DashboardParams sample={text('Sample parameter', 'hello')} />,
);
