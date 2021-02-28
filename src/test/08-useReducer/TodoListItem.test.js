import { shallow } from "enzyme";
import { TodoListItem } from "../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../fixtures/demoTodos";

describe("TodoListItem", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call handleDelete", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

    //jest.fn()
    //toHaveBeenCalledWith
  });
  test("should call handleToggle", () => {
    //jest.fn()
    //toHaveBeenCalledWith

    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should show text correctly", () => {
    //contenido del parrafo
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });
  test("should s", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoListItem todo={demoTodos[0]} />);
    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
