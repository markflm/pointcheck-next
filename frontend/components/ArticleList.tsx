const ArticleList: React.FC<any> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <h3 key={article.id}>{article.title}</h3>
      ))}
    </div>
  );
};

export default ArticleList;
