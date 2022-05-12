import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="What’s the Difference Between a Private Blockchain and a Public Blockchain?" />
      </div>

      {/* HERE I AM USING ARTICLE COMPONENT AND SENDING THE REQUIRED DATA IN THE FORM OF PROPS */}

      {/* WE HAVE 4 ARTICLE COMPONENTS BELOW WHICH WILL BE DISPLAYED AS FOUR DIFFERENT ARTICLES */}

      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="How Does a Blockchain Work?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="How Many Blockchains Are There?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Who Invented Blockchain?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Pros and Cons of Blockchain?" />
      </div>
    </div>
  </div>
);

export default Blog;
