import axios from 'axios';

export function getArticles() {
    return axios
    .get("https://nc-news-by-victor.onrender.com/api/articles")
    .then((response) => {
        return response.data;
    });
}

export function getArticleById (id) {
    return axios
    .get(`https://nc-news-by-victor.onrender.com/api/articles/${id}`)
    .then((response) => {
        return response.data;
    });
}

export function getComments (id) {
    return axios
    .get(` https://nc-news-by-victor.onrender.com/api/articles/${id}/comments`)
    .then((response) => {
        return response.data;
    })
}

export function incraseVote (id, vote) {
    return axios
    .patch(`https://nc-news-by-victor.onrender.com/api/articles/${id}`, { inc_votes: vote } )
    .then((response) => {
        return response.data.vote;
    })
}