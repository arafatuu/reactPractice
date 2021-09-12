/* eslint-disable import/extensions */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import './styles/square.css';

export default class Square extends React.Component {
    render() {
        const { value, clickHandler } = this.props;
        return (
            <button type="button" className="square" onClick={clickHandler}>
                {value}
            </button>
        );
    }
}
