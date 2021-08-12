import React from 'react';
import CustomButton from './CustomButton';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0,
        };
    }

    Increment = () => {
        this.setState((prevState) => ({ val: prevState.val + 1 }));
    };

    Decrement = () => {
        this.setState((prevState) => ({ val: prevState.val - 1 }));
    };

    render() {
        const { val } = this.state;
        return (
            <div>
                <div className="mainState">
                    <h1>{val}</h1>
                </div>
                <CustomButton PlayIt={this.Increment} buttonName="Increment" />
                <CustomButton PlayIt={this.Decrement} buttonName="Decrement" />
            </div>
        );
    }
}
export default MyApp;
