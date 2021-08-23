import React, { Component } from 'react';

class ClickCounter extends Component {
    state = {
        count: 0,
    };

    ClickCount = () => {
        this.setState((prev) => ({
            count: prev.count + 1,
        }));
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <button type="button" onClick={this.ClickCount}>
                    Click {count} times
                </button>
            </div>
        );
    }
}

export default ClickCounter;
