import WithCounter from './WithCounter';

const HoverCounter = (props) => {
    const { count, incrementCount } = props;

    return (
        <div>
            <h1 onMouseOver={incrementCount}>Mouse Hover {count} times</h1>
        </div>
    );
};
export default WithCounter(HoverCounter);
