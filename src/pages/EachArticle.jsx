import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { getArticleByID } from "../utils/api";
import CommentsList from "../components/CommentsList";

const EachArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getArticleByID(article_id).then(({ article }) => {
      if (article) {
        setArticle(article);
        setIsLoading(false);
      } else if (!article) {
        setHasError(true);
        setIsLoading(false);
      }
    });
  }, [article_id]);

  if (hasError)
    return <p className="errorMsg"> Uh oh! Article does not exist. </p>;
  if (isLoading) return <p className="loadingMsg">Fetching Article...</p>;

  return (
    <div className="articlePage">
      <ArticleCard key={article.article_id} article={article} />
      <CommentsList article_id={article_id} />
    </div>
  );
};
export default EachArticle;
