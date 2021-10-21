import React, { useReducer, useEffect } from "react";
import "./styles.css";
import todoReducer from "./todoReducer";
import useForm from "../../hooks/useForm";
import TodoList from "./TodoList";
// There is a way the init is passsing the object inside of the reducer

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
  //   return
  //     {
  //       id: new Date().getTime(),
  //       desc: "Become A Sofware Engineer",
  //       done: false,
  //     },
  //   ];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  // -----------------Adding useEffect

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };
  //------------------------------------------
  console.log(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };
  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };
  //------------------- Return ;

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Aprender ...."
              autoComplete="off"
              className="form-control block"
              onChange={handleInputChange}
              value={description}
            ></input>
            <button
              type="submit"
              className="btn btn-outline-primary mt-2 btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
