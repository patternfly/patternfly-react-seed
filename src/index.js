import React from 'react';
import { Progress } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';
import { greeting } from './app/app';

const transpiled = () => {
  console.log(greeting());
};

transpiled();

export class ProgressMeter extends React.Component {

  render() {
    return (
      <div>
        <Progress value={33} title="test" />
        <Button variant="primary">Button</Button>
      </div>
    );
  }
}
