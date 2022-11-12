import { useState } from "react";

export default function useForm({ initialValue }) {
  const [values, setValues] = useState(initialValue);

  const simpleValidate = () => {
    const estaPreenchido = values.title && values.url && values.category ? true : false
    const limiteMaximo =
      values.title.length < 50 && values.url.length < 50 && values.category.length < 20;

    if (estaPreenchido && limiteMaximo) {
      const urlEstaCorreta =
        /^((https|http):\/\/(www|m)\.?)?youtube.com\/(watch\/?)\?v=[\s\S]*$/.test(
          values.url
        );

      if (urlEstaCorreta) return true;
      window.alert("Url incorreta");
    }

    window.alert('Valores incorretos')
    return false;
  };

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
    simpleValidate: simpleValidate,
  };
}
