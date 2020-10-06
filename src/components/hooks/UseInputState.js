import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return [value, handleChange];
};
