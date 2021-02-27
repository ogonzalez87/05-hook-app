// import React from 'react';
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("HookApp", () => {
  test("should HookApp works", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
