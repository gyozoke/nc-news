import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getComments, deleteComment } from '../utils/api';
import Expandable from "./Expandable";
import CommentAdder from './CommenAdder';

function Comments ({setArticle}) {
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [feedbackMsg, setFeedbackMsg] = useState("");

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

      function handleDelete(commentId) {
        deleteComment(commentId)
          .then(() => {
            setFeedbackMsg("Deleted!");
            setComments((prevComments) => {
              return prevComments.filter((comment) => comment.comment_id !== commentId);
            });
          })
          .catch((err) => {
            console.log(err);
            setFeedbackMsg("Oops, something went wrong! Couldn't delete your comment.");
          });
      }
    
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
              <button onClick={() => handleDelete(comment.comment_id)}>delete comment</button>
            </div>
          ))
        )}
      </section>
    </Expandable>
    )
}
export default Comments;