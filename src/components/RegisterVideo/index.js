import { StyledRegisterVideo } from "./styles";
import { useState } from "react";
import { videoService } from "../../services/videoService";

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
      setValues({ title: "", url: "", category: "" });
    },
  };
}

export default function RegisterVideo() {
  const [modal, setModal] = useState(false);
  const { values, handleChange, clearValues } = useForm({
    initialValue: { title: "", url: "", category: "" },
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
              /^((https|http):\/\/(www|m)\.?)?youtube.com\/(watch\/?)\?v=\w*$/.test(
                values.url
              );

            if (isCorrectUrl && values.url.split("?v=")[1].length === 11) {
              const video = {
                title: values.title,
                url: values.url,
                thumb: `https://img.youtube.com/vi/${
                  values.url.split("?v=")[1]
                }/hqdefault.jpg`,
              };

              videoService()
                .addVideo({video: video, category: values.category})
                .catch(() => alert("Erro ao tentar adicionar video"));

              clearValues();
              setModal(false);
              return;
            }
            alert("url não reconhecida!");
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
              placeholder="Categoria do video"
              name="category"
              min="1"
              max="50"
              value={values.category}
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
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  );
}
