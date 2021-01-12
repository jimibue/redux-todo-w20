import { connect } from "react-redux";
import { setFilter } from "./actions/footer";

const Footer = ({ setFilter, filter }) => {
  const getStyle = (thingIPassedToFunc) => {
    if (thingIPassedToFunc == filter) {
      return { ...styles.active, ...styles.todo };
    }
    return styles.todo;
  };

  return (
    <div style={styles.container}>
      <span style={getStyle("all")} onClick={() => setFilter("all")}>
        All
      </span>
      <span style={getStyle("complete")} onClick={() => setFilter("complete")}>
        Complete
      </span>
      <span style={getStyle("todo")} onClick={() => setFilter("todo")}>
        Todo
      </span>
    </div>
  );
};

const styles = {
  active: {
    border: "1px solid black",
  },
  container: {
    marginTop: "50px",
  },
  todo: {
    marginLeft: "15px",
  },
};

const mapStateToProps = (state) => {
  return { filter: state.filter };
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
