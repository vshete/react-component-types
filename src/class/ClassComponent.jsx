import React from 'react';

export default class ClassComponent extends React.Component {
    render() {
        return (<div>{this.props.message}</div>)
    }
}
