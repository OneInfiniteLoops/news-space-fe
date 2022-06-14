import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      <ul className="ArticlesList">
        {articlesList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};
export default ArticlesList;
