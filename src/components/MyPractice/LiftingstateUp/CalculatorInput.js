const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};
export default function CalculatoInput(props) {
    const { scale, temperatureHandle, temperature } = props;
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input
                value={temperature}
                onChange={(e) => {
                    temperatureHandle(e, scale);
                }}
            />
        </fieldset>
    );
}
