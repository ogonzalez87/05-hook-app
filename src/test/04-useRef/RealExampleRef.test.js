import { shallow } from "enzyme";
import React from "react";
import { RealExampleRef } from "../../components/04-useRef/RealExampleRef";

describe("RealExampleRef", () => {
  const wrapper = shallow(<RealExampleRef />);
  test("should show", () => {
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });
  test("should show component", () => {
    const btn = wrapper.find("button");
    btn.simulate("Click");
    console.log(wrapper.find("MultipleCustomHooks").exists());
  });
});
