import React from 'react';

const tempUnitName = {
    c: 'Celcius',
    f: 'Fahrenhite',
};
export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in {tempUnitName[scale]}</legend>
            <input
                type="text"
                value={temperature}
                onChange={(e) => {
                    onTemperatureChange(e, scale);
                }}
            />
        </fieldset>
    );
}
