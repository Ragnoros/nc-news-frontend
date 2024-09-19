import { useState, useEffect } from "react";
import { fetchArticles } from "./api";
import { ArticleCard } from "./ArticleCard";
import { Link } from "react-router-dom";

export function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, [articles]);

  return (
    <>
      <ul className="articles">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <ArticleCard item={article}></ArticleCard>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
