import useCounter from "../../hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";

describe("Prueba en useCounter", () => {
  test("should different value by default", () => {
    const { result } = renderHook(() => useCounter(100));
    console.log(result);
    expect(result.current.counter).toBe(100);
    // expect(typeof result.current.increment).toBe("function");
    // expect(typeof result.current.decrement).toBe("function");
    // expect(typeof result.current.resetCounter).toBe("function");
  });

  test("Should increment the counter by 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  test("Should decrement the counter by 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test("Should reset the counter to Its initial value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { resetCounter } = result.current;
    act(() => {
      resetCounter();
    });

    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
