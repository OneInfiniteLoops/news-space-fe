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

export const getArticleByID = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
