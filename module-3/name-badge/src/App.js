import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      firstName: "", 
      lastName: "",
      phoneNumber: "", 
      placeOfBirth: "", 
      favoriteFood: "",
      email: "",
      bio: ""
    }


    this.handleAllChanges = this.handleAllChanges.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  
  
  handleAllChanges(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleAllChanges} />
            <input name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleAllChanges} />
            <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleAllChanges} />
          </div>
          <div>
            <input name="placeOfBirth" placeholder="Place of Birth" value={this.state.placeOfBirth} onChange={this.handleAllChanges} />
            <input name="phoneNumber" placeholder="Phone" value={this.state.phone} onChange={this.handleAllChanges} />
            <input name="favoriteFood" placeholder="Favorite Food" value={this.state.favoriteFood} onChange={this.handleAllChanges} />
          </div>
          <textarea name="bio" value={this.state.bio} onChange={this.handleAllChanges} placeholder="Tell us about yourself"></textarea>
          <button>Submit</button>
        </form>

        {(this.state.firstName || this.state.lastName) ? (<div>{this.state.firstName + " " + this.state.lastName}</div>) : <div>&nbsp;</div>}
        {this.state.placeOfBirth ? (<div>{this.state.placeOfBirth}</div>) : <div>&nbsp;</div>}
        {this.state.email ? (<div>{this.state.email}</div>) : <div>&nbsp;</div>}
        {this.state.phoneNumber ? (<div>{this.state.phoneNumber}</div>) : <div>&nbsp;</div>}
        {this.state.favoriteFood ? (<div>{this.state.favoriteFood}</div>) : <div>&nbsp;</div>}

      </div>
    );
  }
}

export default App;
