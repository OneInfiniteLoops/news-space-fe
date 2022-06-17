import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-space.herokuapp.com/api",
});

export const getArticles = (topicParam, sort_by) => {
  return newsApi
    .get("/articles", { params: { topic: topicParam, sort_by: sort_by } })
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

export const getCommentsByArticleID = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getUsers = () => {
  return newsApi
    .get("/users")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const postCommentByArticleID = (article_id, comment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, comment)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
