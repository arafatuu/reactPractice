import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { toCelsius, toFahrenheit, tryConverter } from './lib/Converter';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: '',
    };

    onTemperatureChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? tryConverter(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConverter(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.onTemperatureChange}
                />
                <br />
                <br />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.onTemperatureChange}
                />

                <BoilingVerdict temperature={parseFloat(temperature)} />
            </div>

            // <BoilingVerdict celcius={parseFloat(temperature)} />
        );
    }
}
