import { useState } from "react";
import {
  fetchArticlesById,
  fetchArticleComments,
  patchArticle,
  insertComment,
} from "./api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export function ArticlePage({ user }) {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);

  const { article_id } = useParams();

  useEffect(() => {
    fetchArticlesById(article_id).then((article) => {
      setArticle(article);
      setVotes(article.votes);
    });
  }, [article_id]);
  useEffect(() => {
    fetchArticleComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [comments]);

  function handleClick(event) {
    const inc = event.target.value;
    patchArticle(article_id, inc).then((data) => {
      setVotes(data.article.votes);
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.comment.value;
    insertComment(article_id, comment, user).then(({ comment }) => {
      setComments([...comments, comment]);
    });
  }

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
      <img className="article-image" src={article.article_img_url} />
      <p className="article-topic">Category: {article.topic}</p>
      <p className="article-author">Posted by: {article.author}</p>
      <p className="article-body">{article.body}</p>
      <form onSubmit={handleSubmit}>
        <br></br>
        <label htmlFor="comment">Write your comment</label>
        <br></br>
        <input name="comment" />
        <br></br>
        <label htmlFor="username">Posting as: {user}</label>
        <br></br>
        <button>Subimt</button>
      </form>
      <ul className="comments">
        {comments.map((comment) => {
          return (
            <li className="comment" key={comment.comment_id}>
              <CommentCard comment={comment} user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
