import '@patternfly/react-core/dist/styles/base.css'

import { Button } from '@patternfly/react-core';

export default <Button variant="primary">Button</Button>

import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

class TimeRangeToggleSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: {
                first: false,
                second: false
            }
        };
        this.handleItemClick = (isSelected, event) => {
            const id = event.currentTarget.id;
            this.setState(prevState => {
                prevState.isSelected[id] = isSelected;
                return {
                    isSelected: prevState.isSelected
                };
            });
        };
    }

    render() {
        const { isSelected } = this.state;

        return (
            <ToggleGroup aria-label="Default with multiple selectable">
                <ToggleGroupItem text="Option 1" key={0} buttonId="first" isSelected={isSelected.first} onChange={this.handleItemClick} />
                <ToggleGroupItem text="Option 2" key={1} buttonId="second" isSelected={isSelected.second} onChange={this.handleItemClick} />
                <ToggleGroupItem text="Option 3" key={2} isDisabled />
            </ToggleGroup>
        );
    }
}

export default <TimeRangeToggleSelector></TimeRangeToggleSelector>