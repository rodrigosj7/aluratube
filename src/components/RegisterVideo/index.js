import { StyledRegisterVideo } from "./styles";
import { useState } from "react";

function useForm({ initialValue }) {
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
      setValues({ title: "", url: "" });
    },
  };
}

export default function RegisterVideo() {
  const [modal, setModal] = useState(false);
  const { values, handleChange, clearValues } = useForm({
    initialValue: { title: "", url: "" },
  });

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setModal(true)}>
        +
      </button>
      {modal ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const isCorrectUrl =
              /^((https|http):\/\/)?(www\.)?youtube.com\/watch\/\?v=/.test(
                values.url
              );

            if (isCorrectUrl) {
              clearValues();
              setModal(false);
              return
            }
            alert('url não reconhecida!')
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setModal(false)}
            >
              x
            </button>
            <input
              type="text"
              placeholder="Título do video"
              name="title"
              min="1"
              max="50"
              value={values.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="URL do video"
              name="url"
              min="28"
              max="40"
              value={values.url}
              onChange={handleChange}
              required
            />
            <button type="submit">Cadastrar</button>
            {values.url.length >= 28 && values.url.length <= 40 ? (
              <img src={values[url].split("v=")[1]} alt="" />
            ) : null}
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  );
}
