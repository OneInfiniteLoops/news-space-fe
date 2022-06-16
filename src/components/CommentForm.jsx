import { postCommentByArticleID } from "../utils/api";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";

const CommentForm = ({ article_id }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState({
    username: "",
    body: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);

  const handlePostInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setNewComment((currNewComment) => {
      return { username: user, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    postCommentByArticleID(article_id, newComment).then((res) => {
      setPostSuccess(true);
    });
  };

  if (postSuccess === true) {
    return (
      <>
        <h2>Comment Posted Successfully!</h2>
      </>
    );
  }

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="body"
          onChange={handlePostInputs}
          value={newComment.body}
          placeholder="Post a comment"
          required
        />
        <button className="submit-button" disabled={isSubmitted}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default CommentForm;
