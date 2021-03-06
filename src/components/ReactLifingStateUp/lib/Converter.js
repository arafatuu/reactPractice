export function toCelsius(F) {
    return ((F - 32) * 5) / 9;
}

export function toFahrenheit(C) {
    return (C * 9) / 5 + 32;
}

export function tryConverter(temperature, convertTo) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return '';

    const output = convertTo(input);

    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
