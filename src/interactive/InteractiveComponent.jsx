import React from 'react';

export default class InteractiveComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleClick() {
        this.setState((prevState) => {
            prevState.counter += 1;
            return prevState;
        });
    }

    render() {
        return (
            <div className="interactive-component">
                <div className="count">clicked {this.state.counter} times</div>
                <button type="button" onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        );
    }
}
