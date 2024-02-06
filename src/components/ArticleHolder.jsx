// import axios from 'axios';
import {useState, useEffect} from 'react';
// import { Routes, Route } from "react-router-dom";
// import Article from './Article';



function ArticleHolder () {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(
          `https://nc-news-by-victor.onrender.com/api/articles`
        )
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            setArticles(result.articles);
          });
      }, []);

      return (
        <main>
            <h2>List of all articles</h2>
            <section className="articles">
                {articles.map((article) => {
                    return (
                        <div className="articlecard" key={article.article_id}>
                            <img key="artciel_image" src={article.article_img_url} alt="image of an article"/>
                            <h5 key="article-title">{article.title}</h5>
                            <h4 key="article-author">Author: {article.author}</h4>
                            <h4 key="article-topic">Topic: {article.topic}</h4>
                            <h4 key="article-votes">Votes: {article.votes}</h4>
                            <h5 key="article-comment_count">Comments: {article.comment_count}</h5>
                            {/* <Routes>
                                <Route path="/article" element={<Article />}/>        
                            </Routes> */}
                        </div>
                        );
                    })}
            </section>
        </main>
    )


}

export default ArticleHolder