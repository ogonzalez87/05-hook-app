import { shallow } from "enzyme";
import React from "react";
import { TodoList } from "../../components/08-useReducer/TodoList";
import { demoTodos } from "../fixtures/demoTodos";
import "@testing-library/jest-dom";
import { TodoListItem } from "../../components/08-useReducer/TodoListItem";

describe("TodoList", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have 2 items component", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
