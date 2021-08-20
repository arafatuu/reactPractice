import React from 'react';

export default class Emoji extends React.Component {
    Addemoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(override) {
        let text = 'I am the emoji Component';
        if (override) text = override;
        return <div>{text}</div>;
    }
}
