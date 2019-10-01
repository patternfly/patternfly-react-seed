import { configure } from '@storybook/react';
import '@patternfly/react-core/dist/styles/base.css';
import './reset.css';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
