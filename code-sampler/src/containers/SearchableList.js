import React from 'react';
import {createFilter} from 'react-search-input'
import {Link} from 'react-router-dom';
import hapiserverendpoint from '../hapiserverendpoint';


// WHEREVER THIS COMPONENT APPEARS, IT WILL TAKE A LIST OF ITEMS AS AN ARGUMENT AND WILL APPEAR WITH AN INPUT FOR SEARCHING THAT LIST
// EVENTUALLY, I WILL BE ADDING MORE STRUCTURE TO THIS COMPONENT, BUT FOR NOW, IT WORKS
// ALTHOUGH THERE ARE MULTIPLE WAYS OF DOING THIS
export default class SearchableList extends React.Component {

  state = {
    searchTerm: '',
    topics: [],
    topicInputOpen: false,
    newTopic: ''
  };

  componentDidMount() {
    let component = this;

    // GET THE BASE URL FROM PROPS.MATCH.URL, SO THAT THIS COMPONENT WILL BE DYNAMIC
    let baseurl = component.props.match.url;

    fetch(hapiserverendpoint + `${baseurl}`)
      .then(function (response) {
        return response.json()
      }).then(function (response) {

      let topics = response.topicCollection.map(topicDocument => topicDocument.topic);
      component.setState({'topics': topics});

    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }


  ListView = (filteredWords = []) => {
    let renderedListOfThingsIKnow = filteredWords.map((thing, i) => {
      let wordPortionOfUrl = thing.toLowerCase().replace(/ /g, ''); // SHOULD I ENCODE URI COMPONENT HERE BEFORE SENDING IT TO THE SERVER?
      return (
        <li className='item' key={i}>
          {/*THIS WILL REDIRECT TO TOPICS + THE NAME OF THE TOPIC. I MIGHT NEED TO ENCODDE URI COMPONENT HERE FOR STANDARDIZATION.*/}
          <Link to={`${this.props.match.url}/${wordPortionOfUrl}`}>{thing}</Link>
        </li>)
    });

    return (
      <ul className='grid'>{renderedListOfThingsIKnow}</ul>
    )
  };



  newTopicSubmission = (e) => {

    if (e.keyCode !== 13) return;

    let payload = {
      method: 'POST',
      body: JSON.stringify({
        topic: this.state.newTopic
      })
    };


    fetch(hapiserverendpoint + '/topics/create', payload)
      .then(function (response) {
        return response.json()
      }).then(function (response) {

      window.location.reload(true);

    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };


  render() {
    const {ListView} = this; // THIS IS MY LIST MODEL FOR MY PAGE

    /* RETURN JUST A LIST IF THE PATH IS EXACT, AND FOR CERTAIN COMPONENTS LIKE FOR WORDS, I'M GOING TO JUST RENDER THE LIST ON THE SAME PAGE
     IN A BOX TO THE RIGHT */
    return (
      <div className='searchable-list'>

        <p>- This is a searchable input box, custom-made with my very own choice of magnifier icon pulled from the
          internet!!</p>
        <input placeholder='What does Amren know how to program?' className='search-input'
               onChange={(e) => this.setState({searchTerm: e.target.value})}/>
        <p>This is a list of things I know. It filters every time you type into the search bar! Do you want to know if I
          know something? Just ask!</p>


        <i className={`large plus icon cursor-pointer`}
           onClick={() => this.setState({topicInputOpen: !this.state.topicInputOpen})}/>

        <div className={this.state.topicInputOpen ? `ui input` : 'ui disabled input'}>
          <input onChange={(e) => this.setState({newTopic: e.target.value})} className='add-topic-input' type="text" onKeyUp={(e) => this.newTopicSubmission(e)}
                 placeholder="Add Topic"/>
        </div>
        <br/>
        <span>You can request that I learn a new topic and when you submit, a new entry in the database will be created with the data structure below.</span>
        <br/>
        <span>This will be used as the basis for my how my blog will be structured in the database</span>
        <br/>
        <br/>
        <b>{JSON.stringify({
          "_id": 'ObjectId("5ac4cdaf92c3f66d4d1fcab0")',
          "topic": "",
          "description": "",
          "blog entries": [
            {
              "title": "",
              "date": "",
              "short description": "",
              "content": ""
            }
          ]
        })}</b>

        {/*THIS IS THE LIST VIEW OF MY PAGE*/}
        {ListView(this.state.topics.filter(createFilter(this.state.searchTerm)))}


      </div>
    );
  }
}









