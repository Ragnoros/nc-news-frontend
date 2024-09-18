import axios from "axios";
const articleApi = axios.create({
  baseURL: "https://nc-news-l1nv.onrender.com/api",
});

export const fetchArticles = () => {
  return articleApi.get("/articles", {}).then(({ data }) => {
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
