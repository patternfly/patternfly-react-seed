import React, { Component } from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import './app.css';

export default class App extends Component {
  state = {
    isShowing: true
  };
  dismissNotification = () => {
    this.setState({ isShowing: false });
  };
  render() {
    const { isShowing } = this.state;
    return (
      <div className="app-container">
        {isShowing && (
          <div className="notification-container">
            <Alert
              variant="success"
              title="Setup Complete"
              action={<AlertActionCloseButton onClose={this.dismissNotification} />}
            >
              You have successfully launched your patternfly starter project.
            </Alert>
          </div>
        )}
      </div>
    );
  }
}
