import React from 'react';
import './App.css';
import {UglyThingsContext} from './contextproviders'
import { v4 as uuidv4 } from 'uuid';




class App extends React.Component {

  state = {
    RenderedPosts: [], 
    deleteActivated: true 
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
            let deleteCircle;
            if (this.state.deleteActivated) deleteCircle = 'delete-circle'
            
            
            return (
              <div key={item['uuid']}>
                <div>{item.title}</div>
                <div>{item.description}</div>
                
                <div className="image-wrapper"> 
                  <div onClick={() => {

                      context.removeUglyThing(item['uuid'])
                    }} className={deleteCircle ? deleteCircle : ""}><div className="red-box"></div></div>

                  <img src={item.url} alt="" className="ugly-thing-image"/>


                  <input name="describetheugly" placeholder="Why is it ugly?" />
                </div>

              

              </div>)
          })
          return (
            <div className="page-background">
              <form onSubmit={(e) => {
                  context.addUglyThing(this.handleSubmit(e))
                }} name="new-ugly">

                <input name="url" placeholder="Image Url" />
                <br />
                <input name="title" placeholder="Choose Title" />
                <br />
               
        
              
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




