const dayjs = require("dayjs");

const ArticleCard = ({ article }) => {
  return (
    <li className="ArticleCard">
      <p className="articleCardTopic">{article.topic}</p>
      <h2 className="articleCardTitle">{article.title}</h2>
      <p className="articleCardAuthor">Author: {article.author}</p>
      <p className="articleCardCreatedAt">Created at: {article.created_at}</p>
      <p className="articleCardVotes">{article.votes} votes</p>
      <p className="articleCardComments">{article.comment_count} comments</p>
    </li>
  );
};
export default ArticleCard;
