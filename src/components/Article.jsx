import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/api';
import Comments from './Comments';
import VoteAdder from './VoteAdder';

function Article () {
    const { id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticleById(id)
        .then((response) => {
            setArticle(response.article);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
        })
      }, [id]);



      if (isLoading) return <p>Loading...</p>;
   
    return (
        <main>
            <section>
            <h1>Article</h1>
                <div className="articlecard">
                    <img key="artciel_image" src={article.article_img_url} alt="image of an article"/>
                    <h2 key="article-title">{article.title}</h2>
                    <h3 key="article-author">Author: {article.author}</h3>
                    <h3 key="article-boyd">Desciption: {article.body}</h3>
                    <h3 key="article-topic">Topic: {article.topic}</h3>
                    <h3 key="article-votes">Votes: {article.votes}</h3>
                    <h4 key="article-comment_count">Comments: {article.comment_count}</h4>
                    <VoteAdder setArticle={setArticle} article={article} />
                </div>
            </section>
            <Comments setArticle={setArticle}/>
        </main>        
   ) 
}

export default Article;