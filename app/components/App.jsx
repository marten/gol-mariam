import React from 'react';
import Board from '../board';

class BoardViewer extends React.Component {
  render() {
    var rows = this.props.board.rows.map(function(row) {
      var cells = row.map(function(cell) {
        var value = cell ? "1" : "0";

        return (
          <td>{value}</td>
        );
      });

      return (
        <tr>{cells}</tr>
      );
    });

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board([[0, 1, 0],
                        [0, 1, 0],
                        [0, 1, 0]])
    }
  }

  render() {
    return (
      <div>
        <BoardViewer board={this.state.board} />
      </div>
    );
  }
}
