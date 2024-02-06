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
