import ClickCounter from './components/RenderProps/ClickCounter';
import Counter from './components/RenderProps/Counter';
import HoverCounter from './components/RenderProps/HoverCounter';

function App() {
    return (
        <div className="app">
            <Counter>
                {(count, incrementFun) => (
                    <ClickCounter count={count} incrementFun={incrementFun} />
                )}
            </Counter>

            <Counter>
                {(count, incrementFun) => (
                    <HoverCounter count={count} incrementFun={incrementFun} />
                )}
            </Counter>
        </div>

        // <Emoji>
        //     {({ addEmoji }) => (
        //         <Bracket>
        //             {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
        //         </Bracket>
        //     )}
        // </Emoji>
    );
}

export default App;
