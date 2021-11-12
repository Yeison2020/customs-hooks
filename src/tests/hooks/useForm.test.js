import useForm from "../../hooks/useForm";
import { renderHook, act } from "@testing-library/react-hooks";
import { useState } from "react";

describe("Should return the form by default", () => {
  const formData = {
    name: "yeison",
    email: "KeepGoinguntil@gmail.com",
  };
  test("Should return the form by default", () => {
    const { result } = renderHook(() => useForm(formData));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(formData);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Should change the value of the form (Change name)", () => {
    const { result } = renderHook(() => useForm(formData));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "yeison",
          email: "Enmanuel",
        },
      });
    });
    const [values] = result.current;
    expect(values).toEqual({ ...formData, name: "yeison" });
  });

  test("Should reset the form to It is initial value", () => {
    const { result } = renderHook(() => useForm(formData));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual({ ...formData });
  });
});
