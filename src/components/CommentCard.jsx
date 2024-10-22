import { deleteComment } from "./api";

export function CommentCard({ comment, user }) {
  function handleClick() {
    deleteComment(comment.comment_id);
  }
  const date = new Date(comment.created_at);
  return (
    <div className="commentCard">
      <h4 className="commentAuthor">
        Posted By: {comment.author} on {date.toDateString()}{" "}
      </h4>
      <p className="commentBody">{comment.body}</p>
      {user === comment.author ? (
        <button className="commentDelete" onClick={handleClick}>
          Delete Comment
        </button>
      ) : null}
    </div>
  );
}
