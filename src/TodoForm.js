import { useState } from "react";
import { connect } from "react-redux";

const TodoForm = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch({
      type: "ADD_TODO",
      todo: { id: props.id, name, complete: false },
    });
    props.dispatch({ type: "INC_ID" });
    setName("");
  };
  return (
    <div>
      <div>TodoForm</div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.nextId,
  };
};
export default connect(mapStateToProps)(TodoForm);
