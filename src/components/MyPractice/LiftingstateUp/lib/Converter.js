export function toCelsius(f) {
    return (5 * (f - 32)) / 9;
}

export function toFahrenheit(c) {
    return (9 * c) / 5 - 32;
}

export function tryConvert(temperature, toFun) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const conversionTemp = toFun(input);

    const rounded = Math.round(conversionTemp * 1000) / 1000;
    return rounded.toString();
}
