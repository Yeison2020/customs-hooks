import todoReducer from "../../components/08-useReducer/todoReducer";
import demoTodos from "../Fixtures/demoTodos";
describe("Unit testing using TodoReducer", () => {
  test("Should return the state", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("Should add a Todo", () => {
    const newTodo = {
      id: 3,
      desc: "Learn Express",
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("Should delete from the Todo", () => {
    const newTodo = {
      id: 3,
      desc: "Learn Express",
      done: false,
    };
    const action = {
      type: "delete",
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });

  test("Should toggle of the Todo", () => {
    const newTodo = {
      id: 3,
      desc: "Learn Express",
      done: false,
    };
    const action = {
      type: "toggle",
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);
    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
