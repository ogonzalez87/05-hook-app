import {
  todoReducer,
  newTodo,
} from "../../components/08-useReducer/todoReducer";
import { demoTodos, demoTodos2 } from "../fixtures/demoTodos";

describe("todoReducer", () => {
  test("should return default state", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });
  test("should add todo", () => {
    const action = { type: "add", payload: newTodo };
    const state = todoReducer(demoTodos2, action);

    expect(state).toEqual([...state], newTodo);
  });

  test("should delete todo", () => {
    const action = { type: "delete", payload: 1 };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(1);
  });

  test("should toggle", () => {
    const action = { type: "toggle", payload: 2 };
    const state = todoReducer(demoTodos, action);

    expect(state[1].done).toBe(true);
    expect(state[0]).toEqual(demoTodos[0]);
  });
});
