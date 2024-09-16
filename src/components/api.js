import axios from "axios";
const articleApi = axios.create({
  baseURL: "https://nc-news-l1nv.onrender.com/api",
});

export const fetchArticles = (category) => {
  return articleApi
    .get("/articles", {
      params: {
        category_name: category,
      },
    })
    .then(({ data }) => {
      return data;
    });
};
