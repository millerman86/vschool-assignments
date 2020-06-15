import React from 'react';
import './blog.css';
import hapiserverendpoint from '../../hapiserverendpoint';


export default class BlogListings extends React.Component {


  // STATE IN THIS CASE IS AN ENTIRE TOPIC
  state = {
    'topic': '',
    'description': '',
    'blog entries': []
  };






  // THERE NEEDS TO BE TWO REQUESTS HERE, ONE TO THE TOPIC COLLECTION AND ONE TO THE BLOG ENTRIES COLLECTION
  componentDidMount() {
    let component = this;
    //
    // fetch(hapiserverendpoint + `/topics?topic=${this.props.match.params.topic}`)
    //   .then(function (response) {
    //     return response.json()
    //   }).then(function (response) {
    //
    //     if (!response.topics.length) return;
    //
    //   component.setState({
    //     'topic': response.topics[0].topic,
    //     'description': response.topics[0].description,
    //     'blog entries': [...response.topics[0]['blog entries']]
    //   });
    //
    // }).catch(function (ex) {
    //   console.log('parsing failed', ex)
    // });



    fetch(hapiserverendpoint + `/topicblogentries?_id=${this.props.match.params.topic}`)
      .then(function (response) {
        return response.json()
      }).then(function (response) {


      console.log(response);

      component.setState({
        'topic': response.topic,
        'description': response.description,
        'blog entries': [...response['blog entries']]
      });

    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })


  }

  render() {
    let blogEntries = this.state['blog entries'].sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });


    blogEntries = blogEntries.map((blogEntry, i) => {
      return (
      <div key={i} className="leftcolumn">
        <div className="card cursor-pointer"
             onClick={() => this.props.history.push(`/blog/${blogEntry._id}`)}
        >

          <h2>{blogEntry.title}</h2>
          <h5>{blogEntry.date}</h5>
          <img className="fakeimg" alt=''/>
          <p>{blogEntry['short description']}</p>

        </div>
      </div>)});


    return (
      <div id='blog'>


        <header className="header">
          <h2>{this.state.topic}</h2>
        </header>


        <div className="row">


          {blogEntries.length ? blogEntries : <div></div>}
          {<div className="rightcolumn">
            <div className="card">
              <h2>About Me</h2>
              <img className="fakeimg" alt=''/>
              <p>I am a full-stack web developer and I specialize in React</p>
            </div>
            <div className="card">
              <h3>Popular Post</h3>
              <div className="fakeimg">Link</div>
              <br/>
              <div className="fakeimg">Link</div>
              <br/>
              <div className="fakeimg">Link</div>
            </div>
            <div className="card">
              <h3>Follow Me</h3>
              <p>Some text..</p>
            </div>

          </div>}

          {blogEntries.length > 0 ? blogEntries.slice(1) : <div></div>}

        </div>


        <footer className="footer">
          <h2>Footer</h2>
        </footer>


      </div>
    )

  }
}

