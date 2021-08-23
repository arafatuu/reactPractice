import React, { Component } from 'react';

class HoverCounter extends Component {
    state = {
        count: 0,
    };

    HoverCount = () => {
        this.setState((prev) => ({
            count: prev.count + 1,
        }));
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1 onMouseOver={this.HoverCount}>Mouse Hover {count} times</h1>
            </div>
        );
    }
}

export default HoverCounter;
