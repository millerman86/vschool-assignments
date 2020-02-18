import React, {Component} from 'react';
import './App.css';

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
    console.log(name, value)
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
    console.log("input", this.state.input)
    console.log("output", this.state.output)
    // console.log(this.state.output);

    this.setState((previousState) => {
      // console.log('output', previousState.output)
      return {

        output: {...previousState.input}
        
      }

    })

  }

  render() {

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

        <div className="output-grid">
          <div className="output-grid-text-container">Name:&nbsp;{(this.state.output.firstName || this.state.output.lastName) ? (<div>{this.state.output.firstName + " " + this.state.output.lastName}</div>) : <div>&nbsp;</div>}</div>
          <div className="output-grid-text-container">Phone: {this.state.output.phoneNumber ? (<div>{this.state.output.phoneNumber}</div>) : <div>&nbsp;</div>}</div>
          <div className="output-grid-text-container">Place of Birth:&nbsp;{this.state.output.placeOfBirth ? (<div>{this.state.output.placeOfBirth}</div>) : <div>&nbsp;</div>}</div>
          <div className="output-grid-text-container">Favorite Food:&nbsp;{this.state.output.favoriteFood ? (<div>{this.state.output.favoriteFood}</div>) : <div>&nbsp;</div>}</div>
          <div className="output-grid-text-container">Email:&nbsp;{this.state.output.email ? (<div>{this.state.output.email}</div>) : <div>&nbsp;</div>}</div>

          <div className="output-grid-text-container"></div>
        </div>

        <div class="describe-work-and-skills-container">
          <textarea className="describe-work-and-skills" value={this.state.output.bio} onChange={this.handleAllChanges} />
        </div>

        
        
        

      </div>
    );
  }
}

export default App;
