import config from "../../config.json";

const handler = (req, res) => {
  const localPlaylists = config.playlists;

  const metodosDisponiveis = {
    POST: () => {
      const data = JSON.parse(req.body);

      if (data) {
        if (!localPlaylists[data.category]) localPlaylists[data.category] = [];
        localPlaylists[data.category].push(data.video)

        return res.status(200).json({ response: "video criado" });
      }

      return res.status(400).json({ response: "erro ao criar/adicionar video" });
    },
    GET: () => {
      return res.status(200).json(localPlaylists);
    },
  };

  const apiResponse = metodosDisponiveis[req.method];

  apiResponse
    ? apiResponse()
    : res.status(404).json({ response: "rota não encontrada" });
};

export default handler;
