import React, {Component} from 'react'
import {gql, graphql} from 'react-apollo'
import PinInput from 'react-pin-input'

class authentication extends Component {

  constructor(props){
    super(props)
    this.state = {
      pin:''
    }
  }

  render() {

    const {pin} = this.state
    const {Entity, loading} = this.props.data
    if(loading){
      return (
        <div>loading...</div>
      )
    }

    return (

      <main className="viewport center-align">
        <h2 id='vivintorange'>vivint.</h2>
        <div className={`orangecommunicationbox center-align`}>
          <p>Hi, {Entity.firstName}!</p>
          <p>Please enter your 4 digit Pin or </p>
          <p>use your fingerprint to see your invoice.</p>
        </div>

        <h4 >Enter PIN</h4>

        <form onSubmit={e => {
          e.preventDefault()
          if(parseInt(pin,10) === parseInt(Entity.pin,10)) {
            this.props.history.push('./payments/clickToPay')
          } else {
            alert('Invalid PIN')
          }
        }}>

          <div className="">
            <div className="pinInput">

              <div>
                <PinInput secret length={4} onChange={(value) => {this.setState({pin:value})}} />
              </div>

              <div onClick={e=>{}}>Reset my PIN</div>
            </div>

            <br/>

            <button className={`ui circular green button`} type="submit">Submit</button>
          </div>
        </form>


      </main>
    )
  }
}

const userID = 'cj9bspx7h0cgw0138k5ws8qe7'
const userQuery = gql`
  query($id:ID!){
      Entity(id:$id){
          firstName
          pin
      }
  }
`

export default graphql(userQuery,{options:{variables:{id: userID}}})(authentication)