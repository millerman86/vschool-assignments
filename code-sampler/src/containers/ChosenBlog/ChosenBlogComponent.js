import React from 'react';
import hapiserverendpoint from '../../hapiserverendpoint';

import EditOrCreateBlogModal from '../Blog/EditOrCreateBlog';

import EditOrCreateBlogWithRemarkableNPMPackage from '../Blog/EditOrCreateBlogWithRemarkableNPMPackage';

import nl2br from 'nl2br';
import ReactHtmlParser from 'react-html-parser';


// THIS COMPONENT IS THE INDIVIDUAL BLOG VIEW, SO I SHOULD PROBABLY START OFF BY
// RENDERING THIS FIRST
export default class ChosenBlogComponent extends React.Component {

  state = {
    'topic': '',
    'description': '',
    'blog entries': [

    ],
    content: ''
  };


  componentDidMount() {
    let component = this;

    // I SHOULD PROBABLY HIT THE /BLOG ENDPOINT AND GET THE BLOG BY ID ONLY
    // THEREFORE: /BLOG/:ID
    // REMEMBER TO ENCODEURICOMPONENT ON THE SERVER SIDE
    fetch(hapiserverendpoint + `/blog/${this.props.match.params.blogid}`)
      .then(function (response) {
        return response.json()
      }).then(function (response) {

        console.log("response", response);
      component.setState({
        'topic': response.topic,
        'description': response['short description'],
        'content': response.content
      });
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }


  render() {
    console.log(this.state.content);
    return (
      <div>


       {/* I'M NOT ENTIRELY SURE WHETHER I SHOULD RE-QUERY OR NOT. BUT SINCE I'M JUST DOING THIS BLOG ON MY OWN AND WILL NOT NEED
        ANY EVENTUAL PERSISTENCE, I WILL PROBABLY JUST PUT IT INTO THE COMPONENT AS A PROPERTY*/}
        <EditOrCreateBlogModal textArea={''}/>

        <EditOrCreateBlogWithRemarkableNPMPackage markDownEditorValue={this.state.content} />

        {/*{ReactHtmlParser(nl2br(this.state.textArea))}*/}


        {/*{this.state.<p></p>}*/}
        {/*THIS BUTTON WILL HAVE EVENTUALLY HAVE TO BE PRIVATE, SO JUST I CAN SEE IT WHEN I AM LOGGED IN AS ADMIN*/}

      </div>
    )
  }
}
