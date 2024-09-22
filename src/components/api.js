import axios from "axios";
const articleApi = axios.create({
  baseURL: "https://nc-news-l1nv.onrender.com/api",
});

export const fetchArticles = (topic) => {
  return articleApi
    .get("/articles", {
      params: {
        topic: topic,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchArticlesById = (article_id) => {
  return articleApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data[0];
  });
};

export const fetchArticleComments = (article_id) => {
  return articleApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const patchArticle = (article_id, inc) => {
  return articleApi
    .patch(`/articles/${article_id}`, {
      inc_votes: inc,
    })
    .then(({ data }) => {
      return data;
    });
};
export const insertComment = (article_id, comment, username) => {
  return articleApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: comment,
    })
    .then(({ data }) => {
      return data;
    });
};
export const deleteComment = (comment_id) => {
  return articleApi.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data;
  });
};
