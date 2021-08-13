/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';

class EventHandling extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: 'en-US' };
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (localeDateLanguage) => {
        this.setState({ locale: localeDateLanguage });
    };

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString(this.state.locale)}.</h2>
                <Button change={this.handleClick} locale="bn-BD" />
            </div>
        );
    }
}
export default EventHandling;
