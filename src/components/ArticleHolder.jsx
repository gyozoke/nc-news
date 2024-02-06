import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';


function ArticleHolder () {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
    .then((response) => {
        setArticles(response.articles);
        setIsLoading(false);
    })
    .catch((err) => {
        console.log(err);
    })
  }, []);

      if (isLoading) return <p>Loading...</p>

      return (
        <main>
            <h2>List of all articles</h2>
            <section className="articles">
                {articles.map((article) => {
                    return (
                        <div className="articlescard" key={article.article_id}>
                            <img key="artciles_image" src={article.article_img_url} alt="image of an article"/>
                            <h3 key="articles-title">{article.title}</h3>
                            <h4 key="articles-author">Author: {article.author}</h4>
                            <h4 key="articles-topic">Topic: {article.topic}</h4>
                            <h4 key="articles-votes">Votes: {article.votes}</h4>
                            <h5 key="articles-comment_count">Comments: {article.comment_count}</h5>
                            <Link to={`/articles/${article.article_id}`} key="article-link">
                                <button key="articles-button">View</button>
                            </Link>
                        </div>
                        );
                    })}
            </section>
        </main>
    )
}

export default ArticleHolder