import { useState } from "react";

export default function useForm(initValues) {
  const [values, setValues] = useState(initValues);

  const handleChange(e) {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    });
  };

  return {
    values,
    handleChange
  };
};
