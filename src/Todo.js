import { connect } from "react-redux";

const Todo = ({ name, id, complete, dispatch }) => {
  return (
    <div>
      <span
        onClick={() => dispatch({ type: "TOGGLE_TODO", id })}
        style={
          complete
            ? { color: "grey", textDecoration: "line-through" }
            : { color: "black" }
        }
      >
        {name}
      </span>
      <span
        onClick={() => dispatch({ type: "DELETE_TODO", id })}
        style={{ color: "red", marginLeft: "20px" }}
      >
        X
      </span>
    </div>
  );
};

export default connect()(Todo);
