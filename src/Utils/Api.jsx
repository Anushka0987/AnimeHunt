export const getAnimeById = async (id) => {
  const url = `https://api.jikan.moe/v4/anime/${id}`;

  const res = await fetch(url);
  const json = await res.json();

  return json.data;
};
