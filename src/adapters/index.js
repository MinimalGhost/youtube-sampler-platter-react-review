const API_URL = `https://www.googleapis.com/youtube/v3/search?`;

export default class FetchAdapter {
  static searchFetch = (key, searchTerm, pageToken) => {
    return fetch(
      `${API_URL}part=snippet&key=${key}&q=${searchTerm}&type=video&pageToken=${pageToken}`
    ).then(res => res.json());
  };
}
