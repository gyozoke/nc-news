import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, getComments } from '../utils/api';
import Expandable from "./Expandable";

function Article () {
    const { id } = useParams();
    
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);
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

      useEffect(() => {
        getComments(id)
        .then((response) => {
            // console.log(response.comments)
            setComments(response.comments);
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
                </div>
            </section>
            <Expandable>
            <section className="comments">
            {comments.map((comment) => {
                return (
                    <div className="commentscards" key={comment.comment_id}>
                          <h5 key="comment-body">{comment.body}</h5>
                          <p key="comment-author">By {comment.author}</p>
                          <p key="comment-vote">Votes: {comment.votes}</p>
                        </div>
                        );
                    })}
            </section>
            </Expandable>
        </main>        
        ) 
}

export default Article;