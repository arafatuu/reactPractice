export default function BoilingVerdict({ temperature = 0 }) {
    if (temperature >= 100) return <p>The water would boiled</p>;
    return <p>The water would not boiled</p>;
}
