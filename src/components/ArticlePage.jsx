import { useState } from "react";
import { fetchArticlesById, fetchArticleComments } from "./api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export function ArticlePage() {
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticlesById(article_id).then((article) => {
      setArticle(article);
    });
    fetchArticleComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);
  if (article && comments) {
    return (
      <>
        <h2 className="article-title">{article.title}</h2>
        <p className="article-topic">{article.topic}</p>
        <p className="article-author">{article.author}</p>
        <p className="article-body">{article.body}</p>
        <ul className="comments">
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentCard comment={comment} />
              </li>
            );
          })}
        </ul>
        <CommentCard />
      </>
    );
  }
}
