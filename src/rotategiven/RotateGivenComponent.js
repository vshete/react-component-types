import React from 'react';

const RotateGivenComponent = GivenComponent => {
    class RotateGivenComponent extends React.Component {
        render = () => (<div><GivenComponent className="rotate" /></div>);
    }
    return RotateGivenComponent;
}

export default RotateGivenComponent;
