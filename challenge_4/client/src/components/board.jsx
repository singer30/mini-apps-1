
import Square from "./square.jsx";

class Board extends React.component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}


export default Board