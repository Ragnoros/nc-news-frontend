import { useState, useEffect } from "react";
import { fetchArticles } from "./api";
import { ArticleCard } from "./ArticleCard";
import { Link, useParams } from "react-router-dom";

export function Articles() {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
    });
  }, [articles]);

  return (
    <>
      <div className="topic-selection">
        <Link className="topic-cooking" to="/articles/cooking">
          Cooking
        </Link>
        <Link className="topic-coding" to="/articles/coding">
          Coding
        </Link>
        <Link className="topic-football" to="/articles/football">
          Football
        </Link>
      </div>
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
