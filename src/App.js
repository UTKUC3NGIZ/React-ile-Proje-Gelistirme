import { useReducer, useState, useMemo, useCallback } from "react";

import todoreducer from "./reducers/todoReducer";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function App() {
  console.log("app rendered");

  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(todoreducer, {
    todos: [],
    todo: "",
    search: "",
  });

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
    },
    [state.todo]
  );

  const onChange = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo
        .toLocaleLowerCase("TR")
        .includes(state.search.toLocaleLowerCase("TR"))
    );
  }, [state.todos, state.search]);

  return (
    <>
      <Header />
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <hr />
      <h1>Todo App</h1>
      <input
        type="text"
        value={state.search}
        placeholder="Todolarda Ara"
        onChange={searchHandle}
      />
      {state.search}
      <hr />
      <AddTodo
        onChange={onChange}
        submitHandle={submitHandle}
        todo={state.todo}
      />
      <Todos todos={filteredTodos} />
    </>
  );
}

export default App;
