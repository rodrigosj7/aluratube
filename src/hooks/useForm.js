import { useState } from "react";

export default function useForm({ initialValue }) {
  const [values, setValues] = useState(initialValue);

  return {
    values,
    handleChange: (evento) => {
      const value = evento.target.value;
      const name = evento.target.name;

      setValues({
        ...values,
        [name]: value,
      });
    },
    clearValues: () => {
      setValues({ title: "", url: "", category: "" });
    },
  };
}
