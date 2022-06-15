import VoteCounter from "./VoteCounter";

const ArticleCard = ({ article }) => {
  return (
    <>
      <li className="ArticleCard">
        <p className="articleCardTopic">{article.topic}</p>
        <h2 className="articleCardTitle">{article.title}</h2>
        <p className="articleCardAuthor">Author: {article.author}</p>
        <p className="articleCardCreatedAt">Created at: {article.created_at}</p>
        <p className="articleCardBody">{article.body}</p>
        <VoteCounter votes={article.votes} article_id={article.article_id} />
        <p className="articlesCardVotes">{article.votes} votes</p>
        <p className="articlesCardComments">{article.comment_count} comments</p>
      </li>
    </>
  );
};
export default ArticleCard;
