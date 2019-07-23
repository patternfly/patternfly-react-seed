import * as React from 'react';

interface IDynamicImport {
  load: () => Promise<any>;
  children: any;
}

class DynamicImport extends React.Component<IDynamicImport> {
  public state = {
    component: null
  };
  public componentDidMount() {
    this.props.load().then(component => {
      this.setState({
        component: component.default ? component.default : component
      });
    });
  }
  public render() {
    return this.props.children(this.state.component);
  }
}

export { DynamicImport };
