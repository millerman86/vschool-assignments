import React from 'react';
import './App.css';
import {UglyThingsContext} from './contextproviders'





class App extends React.Component {


  state = {
    RenderedPosts: []
  }


  componentDidMount() {
    // fetch()
  }

  render() {
    const RenderedPosts = this.state.RenderedPosts.map((item) => {
      return (
        <div>
          <h1>{item.title}</h1>
          <img src={item.url} />
          <h3>{item.description}</h3>
        </div>
      )
    })

    return (
      <UglyThingsContext.UglyThingsConsumer>
        {context => {
          return (
            <div>
              {context.uglyThings}
            </div>
          )
        }}
      </UglyThingsContext.UglyThingsConsumer>


      // <div>
      //   <form>
      //     <input placeholder="Image Url" />
      //     <br />
      //     <input placeholder="Choose Title" />
      //     <br />
      //     <input placeholder="Why is it ugly?" />
  
        
      //     <input type="submit" />
      //   </form>
  
      //   <div id="ugly-list">
      //     {RenderedPosts}
      //   </div>
      // </div>
    );

  }
}

export default App;




{/* <img src="https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/5/37/5378ee1c-f8cd-11e3-bba6-0019bb2963f4/53a4bb4276196.image.jpg"/> */}
