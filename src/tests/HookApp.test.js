import React from "react";
import { shallow } from "enzyme";
import HookApp from "../HookApp";

describe("Pruebas en Hook App Componet", () => {
  test("debe mostrarse correctament", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
