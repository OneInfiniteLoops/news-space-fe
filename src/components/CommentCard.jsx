const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card">
      <h3>{comment.author}</h3>
      <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
    </li>
  );
};
export default CommentCard;
