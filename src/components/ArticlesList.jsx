import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const { topic } = useParams();
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(topic).then(({ articles }) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p className="loadingMsg">Fetching Data...</p>;

  return (
    <>
      <h2 className="displayTopic">{topic ? `/${topic}` : "/all"}</h2>
      <ul className="ArticlesList">
        {articlesList.map((article) => {
          return (
            <>
              <li className="ArticlesListItem">
                <p className="articlesListItemTopic">{article.topic}</p>
                <h2 className="articlesListItemTitle">
                  <Link
                    className="articleLink"
                    to={`/articles/${article.article_id}`}
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="articlesListItemAuthor">
                  Author: {article.author}
                </p>
                <p className="articlesListItemCreatedAt">
                  Created at: {article.created_at}
                </p>
                <p className="articlesListItemVotes">{article.votes} votes</p>
                <p className="articlesListItemComments">
                  {article.comment_count} comments
                </p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default ArticlesList;
