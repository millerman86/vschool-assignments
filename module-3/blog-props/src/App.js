import React from 'react';
import './App.css';

import BlogList from './components/BlogList/BlogList';
import BlogPost from './components/BlogPost/BlogPost';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import blogs from './data/blogs';


function App() {
  const renderedBlogPosts = blogs.map((blog) => {
    return <BlogPost title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />
  })

  return (
    <div>
      <Header />
      <BlogList />
        <div className="container">
          {renderedBlogPosts}
          <div className="flex">
            <button className="older-posts">OLDER POSTS →</button>
          </div>

          <div className="flex">
            <div className="social-links">
              <div className="social-link">
                <i class="fas fa-badge"></i>
                <i className="fas fa-circle fa-stack-2x"></i>
              </div>
              <div className="social-link">
              </div>
              <div className="social-link">
                <i className=""></i>
              </div>
            </div>
          </div>



        </div>
      <Footer />
    </div>
  );
}

export default App; 









// import { FontAwesomeIcon } from '@fortawsome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import '@fortawesome/react-fontawesome';

// const element = <FontAwesomeIcon icon={faCoffee} />