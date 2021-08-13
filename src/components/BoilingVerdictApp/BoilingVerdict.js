export default function BoilingVerdict({ celcius }) {
    if (celcius >= 100) return <p>The water would boiled</p>;
    return <p>The water would not boiled</p>;
}
