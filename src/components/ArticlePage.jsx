import { useState } from "react";
import { fetchArticlesById } from "./api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function ArticlePage() {
  const [article, setArticle] = useState();
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticlesById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);
  if (article) {
    return (
      <>
        <h2 className="article-title">{article.title}</h2>
        <p className="article-topic">{article.topic}</p>
        <p className="article-author">{article.author}</p>
        <p className="article-body">{article.body}</p>
      </>
    );
  }
}
