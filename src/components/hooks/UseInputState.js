import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  return [value, setValue];
};
