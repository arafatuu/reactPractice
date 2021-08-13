import React from 'react';
import { Converter, toCelcius, toFahrenhite } from '../lib/Converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: '',
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celcius = scale === 'f' ? Converter(temperature, toCelcius) : temperature;
        const fahrenhite = scale === 'c' ? Converter(temperature, toFahrenhite) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celcius}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenhite}
                    onTemperatureChange={this.handleChange}
                />
                <BoilingVerdict celcius={parseFloat(temperature)} />
            </div>
        );
    }
}
