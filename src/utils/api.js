import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-space.herokuapp.com/api",
});

export const getArticles = (topicParam) => {
  return newsApi
    .get("/articles", { params: { topic: topicParam } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
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

export const patchVotesOfArticleByID = (article_id, inc_votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
