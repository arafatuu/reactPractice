import React from 'react';
import ClickCounter from './components/ContextAPI/MyDefineContext/ClickCounter';
import Counter from './components/ContextAPI/MyDefineContext/Counter';
import ThemeContext from './components/ContextAPI/MyDefineContext/MyContextLibrary/ThemeContext';
import Section from './components/ContextAPI/MyDefineContext/Section';

export default class App extends React.Component {
    state = {
        theme: 'dark',

        switchTheme: () => {
            console.log('switch');
            this.setState(({ theme }) => {
                console.log(theme);
                if (theme === 'light')
                    return {
                        theme: 'dark',
                    };

                return {
                    theme: 'light',
                };
            });
        },
    };

    render() {
        const { theme, switchTheme } = this.state;
        console.log(theme);
        return (
            <div className="app">
                <Counter>
                    {(count, incrementFun) => (
                        <ClickCounter count={count} incrementFun={incrementFun} />
                    )}
                </Counter>

                <ThemeContext.Provider value={{ theme, switchTheme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>

            // <Counter>
            // {(count, incrementFun) => (
            //     <ClickCounter count={count} incrementFun={incrementFun} />
            // )}
            // </Counter>

            // <Counter>
            // {(count, incrementFun) => (
            //     <HoverCounter count={count} incrementFun={incrementFun} />
            // )}
            // </Counter>

            // <Emoji>
            //     {({ addEmoji }) => (
            //         <Bracket>
            //             {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
            //         </Bracket>
            //     )}
            // </Emoji>
        );
    }
}
