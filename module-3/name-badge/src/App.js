import React, {Component} from 'react';
import './App.css';

const newBadge = {
  firstName: "", 
  lastName: "",
  phoneNumber: "", 
  placeOfBirth: "", 
  favoriteFood: "",
  email: "",
  bio: "",   
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      
      input: {
        firstName: "", 
        lastName: "",
        phoneNumber: "", 
        placeOfBirth: "", 
        favoriteFood: "",
        email: "",
        bio: "",   
      },

      badges: [
        
      ], 

      output: {
        firstName: "", 
        lastName: "",
        phoneNumber: "", 
        placeOfBirth: "", 
        favoriteFood: "",
        email: "",
        bio: "",
      }
    }


    this.handleAllChanges = this.handleAllChanges.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  
  
  handleAllChanges(event) {
    const {name, value} = event.target
    this.setState(previousState => {
        return {input: {
          ...previousState.input,
          [name]: value
        }
      }
      
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    
    this.setState((previousState) => {
      return {
        badges: [...previousState.badges, previousState.input],
        input: newBadge
      }

      
    })


  }

  render() {
    const renderedBadges = this.state.badges.map((badge) => {
      return  (
      <div>
         <div className="badge-wrapper">
          <header className="hello-wrapper">
            <h1 className="hello">Hello</h1>
            <p className="my-name-is">my name is</p>

          </header>
        </div>

      <div className="output-grid">
      <div className="output-grid-text-container">Name:&nbsp;{(badge.firstName || badge.lastName) ? (<div>{badge.firstName + " " + badge.lastName}</div>) : <div>&nbsp;</div>}</div>
      <div className="output-grid-text-container">Phone:&nbsp;{badge.phoneNumber ? (<div>{badge.phoneNumber}</div>) : <div>&nbsp;</div>}</div>
      <div className="output-grid-text-container">Place of Birth:&nbsp;{badge.placeOfBirth ? (<div>{badge.placeOfBirth}</div>) : <div>&nbsp;</div>}</div>
      <div className="output-grid-text-container">Favorite Food:&nbsp;{badge.favoriteFood ? (<div>{badge.favoriteFood}</div>) : <div>&nbsp;</div>}</div>
      <div className="output-grid-text-container">Email:&nbsp;{badge.email ? (<div>{badge.email}</div>) : <div>&nbsp;</div>}</div>
      <div className="output-grid-text-container"></div>
    </div>
    <div className="describe-work-and-skills-container">
            <textarea className="describe-work-and-skills" value={this.state.output.bio} onChange={this.handleAllChanges} />
          </div>
          
    </div>)
    })
    return (
      <div className="page-wrapper">
        
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input name="firstName" placeholder="First Name" value={this.state.input.firstName} onChange={this.handleAllChanges} />
          </div>

          <div>
            <input name="lastName" placeholder="Last Name" value={this.state.input.lastName} onChange={this.handleAllChanges} />
          </div>

          <div>
            <input name="email" placeholder="Email" value={this.state.input.email} onChange={this.handleAllChanges} />
          </div>

          <div>
            <input name="placeOfBirth" placeholder="Place of Birth" value={this.state.input.placeOfBirth} onChange={this.handleAllChanges} />
          </div>

          <div>
            <input name="phoneNumber" placeholder="Phone" value={this.state.input.phone} onChange={this.handleAllChanges} />
          </div>

          <div>
            <input name="favoriteFood" placeholder="Favorite Food" value={this.state.input.favoriteFood} onChange={this.handleAllChanges} />
          </div>
        </form>
        <div className="bio-container">
          <textarea className="bio" name="bio" value={this.state.bio} onChange={this.handleAllChanges} placeholder="Tell us about yourself"></textarea>
        </div>
        <div className="submit-container">
          <button onClick={this.handleFormSubmit} className="submit">Submit</button>
        </div>

          {renderedBadges}

       

        
        
        

      </div>
    );
  }
}

export default App;
