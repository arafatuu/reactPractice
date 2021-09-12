import { useContext } from 'react';
import ThemeContext from '../lib/ReactThemeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;

    console.log('Content rendered');
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, incrementFun) => (
                    <HoverCounter
                        count={count}
                        incrementFun={incrementFun}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}
// okk
