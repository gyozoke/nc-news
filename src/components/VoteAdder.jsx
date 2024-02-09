import { incraseVote } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


function VoteAdder({ setArticle }) {
    const {id} = useParams();
    const [vote, setVote] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [hasVoted, setHasVoted] = useState(false);

    function handleVote (vote) {
      if (hasVoted) {
       return setErrorMessage("You've already voted.");
      }
      incraseVote(id, vote)
      .then(() => {
        setErrorMessage(null);
        setVote((prevVote) => prevVote + vote);
        setHasVoted(true);
      })
      .catch((err) => {
        console.log(err);
        setArticle((currentArticle) => {
          return {...currentArticle, votes: currentArticle.votes - vote};
        });
        setErrorMessage("Voting isn't available")
      })
      setArticle((currentArticle) => {
        return {...currentArticle, votes: currentArticle.votes + vote}
      })
    }

return (
    <div className="vote-adder">
      {<h4 className="errormessage">{errorMessage}</h4>}
      <button className="votebuttonup" onClick={() => handleVote(1)} >&#128077;</button>
      {/* <p>{article.votes}</p> */}
      <button className="votebuttondown" onClick={() => handleVote(-1)} >&#128078;</button>
    </div>
  );
}

export default VoteAdder;
