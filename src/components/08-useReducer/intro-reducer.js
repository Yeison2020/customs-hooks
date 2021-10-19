const initialState = [
  {
    id: 1,
    todo: "Comprar Leche",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  // I was getting the undefine part I just needed to addd ?
  if (action?.type === "add") {
    return [...state, action.payload];
  }

  return state;
};

//------------------------------------------

let todos = todoReducer();

//--------------------------------------------
const newTodo = {
  id: 2,
  todo: "Comprar Pan",
  done: false,
};

//-----------------------------------------------
const agregarTodoAction = {
  type: "add",
  payload: newTodo,
};
// ---------------------------------------------
todos = todoReducer(todos, agregarTodoAction);
//-----------------------------------------------

console.log(todos);
