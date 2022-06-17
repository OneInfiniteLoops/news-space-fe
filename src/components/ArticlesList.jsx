import { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { getArticles } from "../utils/api";

const ArticlesList = () => {
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [listOrder, setListOrder] = useState("desc");

  let query = searchParams.get("sort_by");

  const handleNewestClick = (event) => {
    event.preventDefault();
    let query = { sort_by: "created_at" };
    setSearchParams(query);
  };

  const handleMostDiscussedClick = (event) => {
    event.preventDefault();
    let query = { sort_by: "comment_count" };
    setSearchParams(query);
  };

  const handleMostVotesClick = (event) => {
    event.preventDefault();
    let query = { sort_by: "votes" };
    setSearchParams(query);
  };

  const handleOrderClick = (event) => {
    event.preventDefault();
    if (listOrder === "desc") {
      setListOrder("asc");
    } else if (listOrder === "asc") {
      setListOrder("desc");
    }
  };

  useEffect(() => {
    getArticles(topic, query, listOrder).then(({ articles }) => {
      if (articles) {
        setArticlesList(articles);
        setIsLoading(false);
      } else if (!articles) {
        setHasError(true);
        setIsLoading(false);
      }
    });
  }, [topic, query, listOrder]);

  if (hasError) return <p className="errorMsg"> No Articles Found. </p>;
  if (isLoading) return <p className="loadingMsg">Fetching Data...</p>;

  return (
    <>
      <h2 className="display-Topic">{topic ? `/${topic}` : "/all"}</h2>
      <div className="sort-list-panel">
        Sort by :
        <button className="sortby-order-buttons" onClick={handleNewestClick}>
          Date
        </button>
        <button
          className="sortby-order-buttons"
          onClick={handleMostDiscussedClick}
        >
          Comments
        </button>
        <button className="sortby-order-buttons" onClick={handleMostVotesClick}>
          Votes
        </button>
        Order :
        <button className="sortby-order-buttons" onClick={handleOrderClick}>
          {listOrder === "desc" ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className="ArticlesList">
        {articlesList.map((article) => {
          return (
            <div key={article.article_id}>
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
                <p className="articlesListItemVotes">
                  👍 {article.votes} votes
                </p>
                <p className="articlesListItemComments">
                  💬 {article.comment_count} comments
                </p>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default ArticlesList;
