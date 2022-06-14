import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticlesList(articles);
    });
  }, []);

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
