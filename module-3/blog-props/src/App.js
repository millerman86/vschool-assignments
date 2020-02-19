import React from 'react';
import './App.css';

import BlogList from './components/BlogList/BlogList';
import BlogPost from './components/BlogPost/BlogPost';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import blogs from './data/blogs';

// import { FontAwesomeIcon } from '@fortawsome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import '@fortawesome/react-fontawesome';

// const element = <FontAwesomeIcon icon={faCoffee} />


function App() {
  const renderedBlogPosts = blogs.map((blog) => {
    return <BlogPost title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />
  })

  return (
    <div>
      <Header />
      <BlogList />
        <div class="container">
          {renderedBlogPosts}
          <div class="flex">
            <button class="older-posts">OLDER POSTS →</button>
          </div>


          <div class="flex social-links">
            <div class="social-link"></div>
            <div class="social-link"></div>
            <div class="social-link"></div>

          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App; 

