import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

import { Modal } from 'semantic-ui-react';


class NewCustomers extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }


  render() {


    const { firstName, lastName, email, phone } = this.state

    return (

      <main className='new-customer-form'>
        <div className="ui large header">New Customer</div>
        <br/>
        <div>
          <form className="ui huge form" onSubmit={e => {
            e.preventDefault();



            this.props.newCustomerMutation({
              variables: {
                firstName,
                lastName,
                email,
                phone,
              }
            })
          }}>
            <div className="field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" placeholder="First Name" required id="firstName"
                     onChange={e => this.setState({ firstName: e.target.value })}/>
            </div>
            <div className="field">
              <label htmlFor='lastName'>Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name" required id='lastName'
                     onChange={e => this.setState({ lastName: e.target.value })}/>
            </div>
            <div htmlFor='email' className="field">
              <label></label>
              <input type="text" name="email" placeholder="Email" required id='email'
                     onChange={e => this.setState({ Email: e.target.value })}/>
            </div>
            <div htmlFor='phone' className="field">
              <label></label>
              <input type="text" name="phone" placeholder="Phone" required id='phone'
                     onChange={e => this.setState({ Phone: e.target.value })}/>
            </div>
            <button className="ui  button" type="submit">Submit</button>
          </form>

        </div>
      </main>

    )
  }

}


class NewCustomerModal extends Component {


  state = { modalOpen: true };

  handleOpen = () => this.setState({modalOpen: true});


  handleClose = () => {
    this.setState({ modalOpen: false });
  }


  render() {
    return (
      <Modal
        onClose={this.handleClose}
        trigger={ <div className="main-green-button">
          <button onClick={this.handleOpen} className="ui primary basic green circular button">NEW CUSTOMER</button>
        </div>}
      >
        <NewCustomers newCustomerMutation={this.props.mutate} />
      </Modal>
    )
  }
}


const createCustomer = gql` mutation($dob:String!, $city:String!, $state:String!, $street:String!,$zip:String!, $phone:String!, $email:String, $accNum:String!, $enterprisesIds:[ID!], $firstName:String!, $lastName:String!){
  createCustomer(
    accNum:$accNum
  enterprisesIds:$enterprisesIds
  entity:{
    firstName: $firstName
    lastName: $lastName
    phoneNumber: $phone
    email:$email
    dob:$dob
    addresses:{
      city:$city
      state:$state
      street:$street
      zip:$zip
    }}){
    id
  }
}
  
`

export default graphql(createCustomer)(NewCustomerModal)