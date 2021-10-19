import { useState, useEffect } from "react";
// Custom hook
const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // This part here Make the loading part to be shown on the screen It likes reseting to make it long
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          data,
          loading: false,
          error: null,
        });
      });
  }, [url]);

  return state;
};

export default useFetch;
