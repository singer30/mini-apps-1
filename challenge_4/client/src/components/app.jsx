import Board from "./board.jsx";


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       player1: 1,
//       player2: 2,
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>This is a paragraph</h1>
//       </div>
//     );
//   }
// }


// export default App;



// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       player1: 1,
//       player2: 2,
//       currPlayer: null,
//       board: [],
//       gameFinished: false
//     };
//     this.play = this.play.bind(this);
//   }

//   init() {
//     const board = [];
//     for (let r = 0; r < 6; r += 1) {
//       const row = [];
//       for (let c = 0; c < 7; c += 1) {
//         row.push(null);
//       }
//       board.push(row);
//     }
//     this.setState({
//       board,
//       currPlayer: this.state.player1,
//       gameFinished: false
//     });
//   }


//   changeTurn() {
//     if (this.state.currPlayer === player1) {
//       this.setState({
//         currPlayer: player2
//       });
//     }
//   }

//   checkMajorDiagonal() { }
//   checkMinorDiagonal() { }

//   checkColumn(board) {
//     for (let r = 0; r < 6; r++) {
//       for (let c = 0; c < 7; c++) {
//         if (board[r][c]) {
//           if (
//             board[r][c] === board[r - 1][c] &&
//             board[r][c] === board[r - 2][c] &&
//             board[r][c] === board[r - 3][c]
//           ) {
//             return true;
//           }
//         }
//       }
//     }
//     return false;
//   }

//   checkHorizontal() {
//     for (let r = 0; r < 6; r++) {
//       for (let c = 0; c < 7; c++) {
//         if (board[r][c]) {
//           if (
//             board[r][c] === board[r][c + 1] &&
//             board[r][c] === board[r][c + 2] &&
//             board[r][c] === board[r][c + 3]
//           ) {
//             return true;
//           }
//         }
//       }
//     }
//     return false;
//   }

//   checkTie() {
//     for (let r = 0; r < 6; r += 1) {
//       for (let c = 0; c < 7; c += 1) {
//         if (board[r][c] === 1 || board[r][c] === 2) {
//           return false;
//         }
//       }
//     }
//     alert('Draw!');
//   }

//   render() {
//     return <Board />;
//     return (
//       <div>
//         <button
//           className="start"
//           onClick={() => {
//             this.init();
//           }}
//         >Start</button>

//         {this.state.board.map((r, i) => (
//           <Board r={r} nextTurn={this.nextTurn.bind(this)} player={this.state.currPlayer} />
//         ))}
//       </div>
//     );
//   }
// }

export default App;

