/* eslint-disable react/destructuring-assignment */
import React from 'react';

class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString(this.props.locale)}.</h2>
            </div>
        );
    }
}
export default ClassComp;
