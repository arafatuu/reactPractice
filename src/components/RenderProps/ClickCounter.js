const ClickCounter = ({ incrementFun, count }) => (
    <div>
        <button type="button" onClick={incrementFun}>
            Clicked {count} times
        </button>
    </div>
);
export default ClickCounter;
// ok
