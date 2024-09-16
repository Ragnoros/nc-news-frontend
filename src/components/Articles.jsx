import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "./api";
import { ArticleCard } from "./ArticleCard";

export function Articles() {
  const [articles, setArticles] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchArticles(category).then((articles) => {
      setArticles(articles);
    });
  }, [category]);
  return (
    <>
      <ul className="articles">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard item={article}></ArticleCard>
            </li>
          );
        })}
      </ul>
    </>
  );
}
