import { connect } from "react-redux";
import { setFilter } from "./actions/footer";
import Todo from "./Todo";

const TodoList = ({ todos, filter, nextId, setFilter }) => {
  const getTodos = () => {
    if (filter === "all") {
      return todos.map((t) => <Todo key={t.id} {...t} />);
    }
    if (filter == "complete") {
      return todos
        .filter((t) => t.complete == true)
        .map((t) => <Todo key={t.id} {...t} />);
    }
    return todos
      .map((t) => <Todo key={t.id} {...t} />)
      .filter((t) => t.props.complete != true);
  };
  return (
    <div>
      <div>TodoList</div>
      <h1>current filter is {filter}</h1>
      <h1>nextID is {nextId}</h1>
      <h1 onClick={() => setFilter("all")}>set Filter all on click</h1>

      {getTodos()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos, filter: state.filter, nextId: state.nextId };
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
