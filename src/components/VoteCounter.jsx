import { useState } from "react";
import { patchVotesOfArticleByID } from "../utils/api";

const VoteCounter = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const handleClickUpVote = () => {
    setVoteChange((currVotes) => currVotes + 1);
    patchVotesOfArticleByID(article_id, voteChange + 1).catch(() => {
      setVoteChange((currVotes) => currVotes - 1);
    });
  };

  const handleClickDownVote = () => {
    setVoteChange((currVotes) => currVotes - 1);
    patchVotesOfArticleByID(article_id, voteChange - 1).catch(() => {
      setVoteChange((currVotes) => currVotes + 1);
    });
  };

  return (
    <>
      <p>{votes + voteChange} votes</p>
      <button
        className="votebutton"
        onClick={handleClickUpVote}
        disabled={voteChange > 0}
      >
        👍 upvote
      </button>
      <button
        className="votebutton"
        onClick={handleClickDownVote}
        disabled={voteChange < 0}
      >
        👎 downvote
      </button>
    </>
  );
};
export default VoteCounter;
