import { useState } from 'react';
import { incraseVote } from '../utils/api';
import { useParams } from 'react-router-dom';

function VoteAdder({ setArticle }) {
    const {id} = useParams();
    const vote = 1;

function handleClickUp () {
    incraseVote(id, vote)
    .then(() => {
        setArticle((currentArticle) => {
            return { ...currentArticle, votes: currentArticle.votes + vote}
        })    
    })
    .catch((err) => {
        console.log(err.message);
    })
}

function handleClickDown () {
    incraseVote(id, vote)
    .then(() => {
        setArticle((currentArticle) => {
            return { ...currentArticle, votes: currentArticle.votes + -vote}
        })
    })
    .catch((err) => {
        console.log(err.message);
    })
}

  return (
    <div className="vote-adder">
        <button className="votebuttonup" onClick={handleClickUp}>&#128077;</button>
        <button className="votebuttondown" onClick={handleClickDown}>&#128078;</button>
    </div>
  );
}

export default VoteAdder;
