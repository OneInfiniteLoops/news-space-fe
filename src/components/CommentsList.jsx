import { useState, useEffect } from "react";
import { getCommentsByArticleID } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentsList = ({ article_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getCommentsByArticleID(article_id).then(({ comments }) => {
      setCommentsList(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (hasError) return <p className="errorMsg"> No Comments Found. </p>;
  if (isLoading) return <p className="loadingMsg">Fetching Comments...</p>;

  return (
    <div className="comment-section">
      <h2 className="comment-section-heading">Comment Section/</h2>
      <ul className="comments-list">
        {commentsList.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
