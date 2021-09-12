import React from 'react';
import ThemeContext from './components/ContextAPI/lib/ReactThemeContext';
import ClickCounter from './components/ContextAPI/ReactWay/ClickCounter';
import Counter from './components/ContextAPI/ReactWay/Counter';
import Section from './components/ContextAPI/ReactWay/Section';

export default class App extends React.Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'light',
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    };

    render() {
        return (
            <div className="app">
                <Counter>
                    {(count, incrementFun) => (
                        <ClickCounter count={count} incrementFun={incrementFun} />
                    )}
                </Counter>

                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>

            // Context API
            //      <Counter>
            //      {(count, incrementFun) => (
            //          <ClickCounter count={count} incrementFun={incrementFun} />
            //      )}
            //  </Counter>

            //  <ThemeContext.Provider value={{ theme, switchTheme }}>
            //      <Section />
            //  </ThemeContext.Provider>

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
