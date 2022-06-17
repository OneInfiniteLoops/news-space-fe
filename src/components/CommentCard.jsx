import CommentDelete from "./CommentDelete";
import { useState } from "react";

const CommentCard = ({ comment }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  if (isDeleted) return <h3 className="comment-card">Comment Deleted.</h3>;

  return (
    <li className="comment-card">
      <CommentDelete
        className="delete-button"
        author={comment.author}
        comment_id={comment.comment_id}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        setIsDeleted={setIsDeleted}
      />
      <h3>{comment.author}</h3>
      <p>{comment.created_at}</p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </li>
  );
};
export default CommentCard;
