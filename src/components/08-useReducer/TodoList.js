import React from "react";

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => {
          return (
            <li key={todo.id} className="list-group-item">
              <p
                className={`${todo.done && "complete"}`}
                onClick={() => handleToggle(todo.id)}
              >
                {i + 1}. {todo.desc}
              </p>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                Borrar
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
