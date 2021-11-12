import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import MultipleCustomsHooks from "../../../components/03-examples/MultipleCustomsHooks";
import useFetch from "../../../hooks/useFetch";
// This libray simulate the result of differents customs Hooks.
jest.mock("../../../hooks/useFetch");
Enzyme.configure({ adapter: new Adapter() });

describe("Puebas en MultipleCostumsHooks", () => {
  test("Should show the correct result", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomsHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should show the information of the quote It", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Yeison", quotes: "Hola mundo" }],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomsHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    console.log(wrapper.html());
  });
});
