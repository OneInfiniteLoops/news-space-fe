import { useState, useEffect } from "react";
import { getCommentsByArticleID } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentsList = ({ article_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNoComments, setHasNoComments] = useState(false);

  useEffect(() => {
    getCommentsByArticleID(article_id).then(({ comments }) => {
      if (comments) {
        setCommentsList(comments);
        setIsLoading(false);
      } else if (!comments) {
        setHasNoComments(true);
        setIsLoading(false);
      }
    });
  }, [article_id]);

  if (hasNoComments)
    return <p className="noCommentMsg"> No Comments Posted Yet. </p>;
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
