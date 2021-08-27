const HoverCounter = ({ incrementFun, count }) => (
    <div>
        <h1 onMouseOver={incrementFun}>Hovered {count} times</h1>
    </div>
);
export default HoverCounter;
// Ok
