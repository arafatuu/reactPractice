import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import CalculatorInput from './CalculatorInput';
import { toCelsius, toFahrenheit, tryConvert } from './lib/Converter';

class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: '',
    };

    temperatureHandle = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <CalculatorInput
                    scale="c"
                    temperatureHandle={this.temperatureHandle}
                    temperature={celsius}
                />
                <CalculatorInput
                    scale="f"
                    temperatureHandle={this.temperatureHandle}
                    temperature={fahrenheit}
                />
                <BoilingVerdict temperature={parseFloat(temperature)} />
            </div>
        );
    }
}

export default Calculator;
