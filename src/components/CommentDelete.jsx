import { useContext } from "react";
import { deleteCommentByCommentID } from "../utils/api";
import { UserContext } from "../contexts/User";

const CommentDelete = ({
  author,
  comment_id,
  isClicked,
  setIsClicked,
  setIsDeleted,
}) => {
  const { user } = useContext(UserContext);

  const handleClick = () => {
    setIsClicked(true);
    deleteCommentByCommentID(comment_id).then((res) => {
      setIsDeleted(true);
      setIsClicked(false);
    });
  };

  if (author === user) {
    return (
      <button
        className="delete-button"
        onClick={handleClick}
        disabled={isClicked}
      >
        ❌ Delete Comment
      </button>
    );
  }
};

export default CommentDelete;
