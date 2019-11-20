import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>{this.props.message}</div>)
    }
}
