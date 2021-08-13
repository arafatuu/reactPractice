export function toCelcius(F) {
    return ((F - 32) * 5) / 9;
}

export function toFahrenhite(C) {
    return (C * 9) / 5 + 32;
}

export function Converter(temperature, convertTo) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return '';

    const output = convertTo(input);

    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
