import { todoReducer,newTodo } from "../../components/08-useReducer/todoReducer";
import { demoTodos, demoTodos2 } from "../fixtures/demoTodos";

describe("todoReducer", () => {
  test("should return default state", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });
  test("should add todo", () => {
    const action = { type: "add", payload: newTodo };
    const  state  = todoReducer(demoTodos2,action);
    console.log(state);
    expect(state).toEqual([...state],newTodo)
     
    // expect(state).toEqual(demoTodos);/
  });
});
