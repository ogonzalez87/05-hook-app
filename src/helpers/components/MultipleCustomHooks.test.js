import { shallow } from "enzyme";
import React from "react";
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
jest.mock("../../hooks/useFetch");
describe("Multiple Hooks", () => {
  test("should match snapshoot", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should show info", () => {
    useFetch.mockReturnValue({
      data: [{ author: "fernando", quote: "hola mundo" }],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    
    expect(wrapper.find(".alert").exists()).toBe(false);
    // expect(wrapper.find(".mb-0").text().trim()).toBe("HolaMundo");
    expect(wrapper.find("footer").text().trim()).toBe("fernando");
    expect(wrapper.find(".mb-3").text().trim()).toBe("hola mundo");

    // expect(wrapper).toMatchSnapshot();
  });
});
