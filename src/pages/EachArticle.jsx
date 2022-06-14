import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { getArticleByID } from "../utils/api";

const EachArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleByID(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <div className="articlePage">
      <ArticleCard key={article.article_id} article={article} />
    </div>
  );
};
export default EachArticle;
