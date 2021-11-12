import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../../hooks/useFetch";

describe("Should return the data by default", () => {
  test("Return infomration by default", () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/${1}`)
    );
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("Should have the desire Information", () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/${1}`)
    );
    await waitForNextUpdate();

    // Why not passing because there is a different in the Fecth syntax of the useFecth It's returning a promise,but I could not make it to work
    // That's why I get the data.length error
    const { data, loading, error } = result.current;
    expect(data.length).toEqual(object);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("Should have the desire Information", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/api/users`)
    );
    //Verify here Why I'm getting the error
    await waitForNextUpdate();

    // This is just another copy I still do not understand Why the error when destructuring waitForNextUpdate
    const { data, loading, error } = result.current;
    expect(data.length).toEqual(null);
    expect(loading).toBe(false);
    expect(error).toBe("We cound not load Your Information");
  });
});
