import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import RealExampleRef from "../../components/04-useRef/RealExampleRef";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas en <RalExampleUseRef/>", () => {
  test("Should Macth with the snapShot", () => {
    const wrapper = <RealExampleRef />;
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find("MultipleCustomsHooks").exist()).toBe(false);
  });

  test("Should show the component when called functions", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomsHooks").exists()).toBe(false);
  });
});
