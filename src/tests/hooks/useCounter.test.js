import useCounter from "../../hooks/useCounter";
import { renderHook } from "@testing-library/react-hooks";

describe("Prueba en useCounter", () => {
  test("should different value by default", () => {
    const { result } = renderHook(() => useCounter());
    console.log(result);
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.resetCounter).toBe("function");
  });
});
