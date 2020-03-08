import React from 'react';
import './App.css';
import {UglyThingsContext} from './contextproviders'
import { v4 as uuidv4 } from 'uuid';



function UglyThing(props) {
 
  return (
    <div key={props.item['uuid']}>
    <div>{props.item['title']}</div>
    <div>{props.item['description']}</div>
    
    <div className="image-wrapper"> 

    <img src={props.item.url} alt="" className="ugly-thing-image"/>

    <div className="delete-box-aspect-ratio">
      <div className="delete-child" onClick={() => {
        props.removeUglyThing(props.item['uuid'])
      }}>
        <div className="inner-two container test">
          <div className="inner-two red">
          </div>
        </div>
      </div>
    </div>

      {/* <div onClick={() => {

          props.removeUglyThing(props.item['uuid'])
        }} className={props.deleteCircle}><div className="red-box"></div></div> */}

      <input name="describetheugly" placeholder="Why is it ugly?" />
    </div>
  </div>
  )
}




class App extends React.Component {

  state = {
    RenderedPosts: [], 
    deleteActivated: false 
  }


  handleSubmit = (e, context) => {
    e.preventDefault()
    const uuid = uuidv4()


    const url = document['new-ugly'].url.value
    const title = document['new-ugly'].title.value 
    const description = document['new-ugly'].describetheugly.value

    context.addUglyThing({
      url, 
      description, 
      title, 
      uuid
    })
  }


  render() {

    return (
      <UglyThingsContext.UglyThingsConsumer>
        {context => {
          const RenderedPosts = context.uglyThings.map((item, index) => {
            let deleteCircle;
            if (!this.state.deleteActivated) deleteCircle = ""
            if (this.state.deleteActivated) deleteCircle = "delete-circle"
            
            
            return (
              <UglyThing item={item} deleteCircle={deleteCircle} removeUglyThing={context.removeUglyThing} />
            )
          })
          return (
            <div className="page-background">
              <form 
                  name="new-ugly"
                  onSubmit={(e) => {
                    this.handleSubmit(e, context)
                  }}>

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




