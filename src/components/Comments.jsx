import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/api';
import Expandable from "./Expandable";
import CommentAdder from './CommenAdder';

function Comments ({setArticle}) {
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getComments(id)
        .then((response) => {
            setComments(response.comments);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        })
      }, [id]);

    
    
      if (isLoading) return <p>Loading...</p>;
    
    return (
    <Expandable>
       <CommentAdder setComments={setComments} setArticle={setArticle} />
      <section className="comments">
        {comments.length === 0 ? (
          <p>No comment on this article yet</p>
        ) : (
          comments.map((comment) => (
            <div className="commentscards" key={comment.comment_id}>
              <h5 key="comment-body">{comment.body}</h5>
              <p key="comment-author">By {comment.author}</p>
              <p key="comment-vote">Votes: {comment.votes}</p>
            </div>
          ))
        )}
      </section>
    </Expandable>
    )
}
export default Comments;