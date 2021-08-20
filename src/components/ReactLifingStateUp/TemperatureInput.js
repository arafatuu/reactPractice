const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit',
};
export default function TemperatureInput({ scale, temperature, onTemperatureChange }) {
    return (
        <fieldset>
            <legends>Enter input in {scaleName[scale]}</legends>
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
