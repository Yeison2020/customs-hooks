import { useState } from "react";

const useForm = (intialState = {}) => {
  const [values, setValues] = useState(intialState);
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  return [values, handleInputChange];
};

export default useForm;
