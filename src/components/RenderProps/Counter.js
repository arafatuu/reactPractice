import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    incrementFun = () => {
        this.setState((prev) => ({
            count: prev.count + 1,
        }));
    };

    render() {
        const { children } = this.props;
        const { count } = this.state;
        return children(count, this.incrementFun);
    }
}

export default Counter;
// ok
