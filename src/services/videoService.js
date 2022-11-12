const api = "/api/playlist";

const getAllVideos = async () => {
  const response = await fetch(api);
  const data = await response.json();
  return data
};

const addVideo = async (data) => {
  const rawData = JSON.stringify(data)
  const response = await fetch(api, {
    method: "POST",
    body: rawData,
  });

  const dataResponse = await response.json();
  return dataResponse;
};

export function videoService() {
  return {
    getAllVideos,
    addVideo,
  };
}
