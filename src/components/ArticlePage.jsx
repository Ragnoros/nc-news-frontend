import { useState } from "react";
import { fetchArticlesById, fetchArticleComments, patchArticle } from "./api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export function ArticlePage() {
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();
  const [votes, setVotes] = useState();

  const { article_id } = useParams();

  useEffect(() => {
    fetchArticlesById(article_id).then((article) => {
      setArticle(article);
      setVotes(article.votes);
    });
    fetchArticleComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  function handleClick(event) {
    const inc = event.target.value;
    patchArticle(article_id, inc).then((data) => {
      setVotes(data.article.votes);
    });
  }

  if (article && comments) {
    return (
      <>
        <button value={1} onClick={handleClick}>
          Like
        </button>
        <button value={-1} onClick={handleClick}>
          Dislike
        </button>
        <p className="article-votes">Likes: {votes}</p>
        <h2 className="article-title">{article.title}</h2>
        <p className="article-topic">Category: {article.topic}</p>
        <p className="article-author">Posted by: {article.author}</p>
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
      </>
    );
  }
}
