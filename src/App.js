import OriginalComponent from './components/OriginalComponent';

function App() {
    return (
        <div className="app">
            <OriginalComponent />
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
