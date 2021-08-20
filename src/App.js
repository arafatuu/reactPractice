import Calculator from './components/ReactLifingStateUp/Calculator';

function App() {
    return (
        <Calculator />
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
