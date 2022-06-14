import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-space.herokuapp.com/api",
});

export const getArticles = (topicParam) => {
  return newsApi
    .get("/articles", { params: { topic: topicParam } })
    .then((res) => {
      return res.data;
    });
};
