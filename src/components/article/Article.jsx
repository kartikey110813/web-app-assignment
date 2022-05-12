import React from 'react';
import './article.css';

// THIS IS THE ARCTICLE COMPONENT WHICH IS ACCEPTING PROPS AS IMGURL, DATE,TEXT FROM THE BLOG CONTAINER
// IN HERE WE CAN USE THIS COMPONENT MULTIPLE TIME BY PASSING DIFFERENT PROPS.

const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a href="https://www.investopedia.com/terms/b/blockchain.asp" target="_blank" rel="noreferrer"><p>Read Full Article</p></a>
    </div>
  </div>
);

export default Article;
