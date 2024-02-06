import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ArticleHolder from './components/ArticleHolder'
import Article from './components/Article'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Link to={"/"} key="home-link">
      <button id='homebutton' key="home-button">Home</button>
    </Link>
    <Header  />
    <Routes>
        <Route path="/" element={<ArticleHolder />} />
        <Route path="/articles/:id" element={<Article />} />
    </Routes>
    </>
  )
}

export default App
