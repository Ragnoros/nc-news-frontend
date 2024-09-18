export function CommentCard({ comment }) {
  if (comment) {
    return (
      <div className="commentCard">
        <h4>{comment.author}</h4>
        <p>{comment.body}</p>
        <p>{comment.created_at}</p>
      </div>
    );
  }
}
