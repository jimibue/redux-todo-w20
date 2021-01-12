// pure functions
// don't have side effects
// these dont change any getting passed they return a new form of it

//action = {type:'string'*required*, data/payload:anytype, optional }
//action = {type:'ADD_TODO', todo:{id:1, text:'eat' complete:true} }
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
