import { deleteComment } from "./api";

export function CommentCard({ comment, user }) {
  function handleClick() {
    deleteComment(comment.comment_id);
  }
  return (
    <div className="commentCard">
      {/* <img className="cardImage" src={comment.avatar_url} /> */}
      <h4>{comment.author}</h4>
      <p>{comment.body}</p>
      <p>{comment.created_at}</p>
      {user === comment.author ? (
        <button onClick={handleClick}>Delete Comment</button>
      ) : null}
    </div>
  );
}
