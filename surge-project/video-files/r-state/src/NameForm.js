import React, {Component} from 'react'

export default class NameForm extends Component {
    constructor(){
        super()
        this.state = {
            fName: "",
            lName: ""
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const fullName = `${this.state.fName} ${this.state.lName}`
        this.props.updateContacts(fullName)

        this.setState({
            fName: "",
            lName: ""
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="fName" 
                    value={this.state.fName}
                    onChange={this.handleChange}/>
                <input 
                    type="text" 
                    name="lName" 
                    value={this.state.lName}
                    onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        )
    }
}