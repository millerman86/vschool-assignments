import React from 'react';
import hapiserverendpoint from '../../hapiserverendpoint';


// I THINK I'LL TURN THIS COMPONENT INTO A BIRD'S EYE OR LIST VIEW
class Topic extends React.Component {

  state = {
    topic: '',
    description: ''
  };


  componentDidMount() {
    let component = this;

    fetch(hapiserverendpoint + `/v1/topics?topic=${this.props.match.params.topic}`)
      .then(function(response) {
        return response.json()
      }).then(function(topic) {
      component.setState({'topic': topic.topic, 'description': topic.description});
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }


  render() {
    return (
      <div>
        {'The topic is: ' + this.state.topic}
        {' The description is: ' + this.state.description}
      </div>
    )
  }
}


export default Topic;



















// THIS IS ONLY FOR USE IF YOU WANT TO RENDER THE OTHER DATA INLINE
// const Topic = ({match}, {location}) => {
//   return (
//   <div>
//     <p>This is the topic component</p>
//     <p>{match.params.topic}</p>
//   </div>
// )};
