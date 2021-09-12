import React from 'react';
import Square from './Square';
import './styles/board.css';
import calculateWinner from './Winner';

export default class Board extends React.Component {
    state = {
        squares: Array(9).fill(null),
        isNextX: true,
    };

    clickHandler = (i) => {
        // console.log('Clicked');
        const { squares, isNextX } = this.state;
        const sq = squares.slice();

        sq[i] = isNextX === true ? 'X' : 'O';
        this.setState({
            squares: sq,
            isNextX: !isNextX,
        });
    };

    renderSquare(i) {
        const { squares } = this.state;
        return <Square value={squares[i]} clickHandler={() => this.clickHandler(i)} />;
    }

    render() {
        const { squares, isNextX } = this.state;
        let status;
        const winner = calculateWinner(squares);
        if (winner) {
            status = `Winner is ${winner}`;
        }
        status = isNextX === true ? 'Next Player is X' : 'Next Player is O';

        // eslint-disable-next-line consistent-return
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
