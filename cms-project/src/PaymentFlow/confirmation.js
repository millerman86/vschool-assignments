import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';


class Confirmation extends Component {


  render() {

    const {firstname, type, paymentreceived, bankaccountlast4} = this.props.match.params;

    return (
      <main className='viewport'>
        <h2 id='vivintorange'>vivint.</h2>

        <div className={`orangecommunicationbox center-align`}>
          <p>Thanks, {firstname}!</p>
        </div>


        <div className='payment-amount'>
          <div className="font-size28">Payment Received</div>
          <p id='payment'>${paymentreceived}</p>
        </div>

        <div className='grey-box center-align padding10'>

          <div className="padding10">
            {type === 'checking' ? <p>Payment was made through your checking account ending in {bankaccountlast4}</p> : null}
            {type === 'card' ? <p>Payment was made by card ending in 1234</p> : null}
            {type === 'ach' ? <p>Payment was made by ACH</p> : null}
            {type === 'cash' ? <p>Payment was made by cash in the amount of ${paymentreceived}</p> : null}
          </div>

          <div className="padding10"><p className="bold">Your next payment is due <br/> 04/15/2017</p></div>

        </div>
      </main>
    )
  }
}
export default withRouter(Confirmation);



