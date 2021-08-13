import React from 'react';
import Button from '../EventHandling/Button';

class ConditionalRend extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: 'bn-BD' };
    }

    componentDidMount() {
        this.clockInterval = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }

    buttonClick = (language) => {
        this.setState({ locale: language });
    };

    render() {
        const { date, locale } = this.state;
        console.log(`here ${locale}`);
        return (
            <div>
                <div className="Clock">
                    <h2>The time is : {date.toLocaleTimeString(locale)}</h2>
                </div>
                {locale === 'bn-BD' ? (
                    <Button change={this.buttonClick} locale="en-US" show={false} />
                ) : (
                    <Button change={this.buttonClick} locale="bn-BD" show />
                )}
            </div>
        );
    }
}
export default ConditionalRend;
