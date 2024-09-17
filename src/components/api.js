import axios from "axios";
const articleApi = axios.create({
  baseURL: "https://nc-news-l1nv.onrender.com/api",
});

export const fetchArticles = (article_id) => {
  return articleApi
    .get("/articles", {
      params: {
        article_id: article_id,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchArticlesById = (article_id) => {
  return articleApi
    .get(`/articles/${article_id}`, {
      params: {
        article_id: article_id,
      },
    })
    .then(({ data }) => {
      return data[0];
    });
};
