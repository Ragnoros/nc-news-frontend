export function ArticleCard({ item }) {
  const { title, topic, author, article_img_url } = item;

  return (
    <div className="articleCard">
      <h3>{title}</h3>
      <img className="cardImage" src={article_img_url} />
      <p>{topic}</p>
      <p>{author}</p>
    </div>
  );
}
