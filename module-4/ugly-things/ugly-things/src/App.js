import React from 'react';
import './App.css';
import {UglyThingsContext} from './contextproviders'
import { v4 as uuidv4 } from 'uuid';




class App extends React.Component {

  state = {
    RenderedPosts: []
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const uuid = uuidv4()

    const url = document['new-ugly'].url.value
    const title = document['new-ugly'].title.value 
    const description = document['new-ugly'].describetheugly.value

    return {
      url, 
      description, 
      title, 
      uuid
    }
  }

  render() {

    return (
      <UglyThingsContext.UglyThingsConsumer>
        {context => {
          const RenderedPosts = context.uglyThings.map((item, index) => {
            return (
              <div key={item['uuid']}>
                <div>{item.title}</div>
                <div>{item.description}</div>
                <img src={item.url} alt="" className="ugly-thing-image"/>
              </div>)
          })
          return (
            <div>
              <form onSubmit={(e) => {
                  context.addUglyThing(this.handleSubmit(e))
                }} name="new-ugly">

                <input name="url" placeholder="Image Url" />
                <br />
                <input name="title" placeholder="Choose Title" />
                <br />
                <input name="describetheugly" placeholder="Why is it ugly?" />
        
              
                <input type="submit" onClick={context.removeUglyThing}/>
              </form>
        
              <div id="ugly-list">
                {RenderedPosts}
              </div>
            </div>
          )
        }}
      </UglyThingsContext.UglyThingsConsumer>
    );
  }
}


export default App;




