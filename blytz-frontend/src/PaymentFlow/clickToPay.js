/**
 * Created by Douglas on 10/16/2017.
 */
import React, {Component} from 'react'
import {gql, graphql, compose} from 'react-apollo'

import {withRouter} from 'react-router-dom';



class ClickToPay extends Component {
  state = {
    payMethod: 'checking',
    card: 'Card'
  };

  render() {
    const {loading, Entity} = this.props.data;

    if (!loading && Entity) {
      const bankAccountsLast4 = Entity.bankAccounts
        .map(bankaccount => bankaccount.accNumber)
        .map(accNumber => accNumber.substring(accNumber.length - 4));
      return (
        <main className='viewport'>
          <h2 id='vivintorange'>vivint.</h2>

          <div className={`orangecommunicationbox center-align`}>
            <p>Hi, {Entity.firstName}!</p>
            <p>Your payment is overdue</p>
          </div>

          <div className={`font-size28 center-align`}>Payment Due:</div>
          <p id='payment'>${Entity.invoices[0].amountDue}</p>


          <div className='solid-silver-border'>
            <div className={`margin-left-20px font-size20`}>


              <div className='margin-bottom-20px'>
                <input type="radio" name="paymentOptions" defaultChecked id="check"
                       onClick={() => this.setState({payMethod: "checking"})}/>
                <label className='padding-left' htmlFor="check">Checking</label>

                {/*<div className='solid-silver-border_lastfour'>*/}
                  {/*<p id='lastfour'>LAST FOUR</p>*/}
                  {/*{bankAccountsLast4}*/}
                {/*</div>*/}
                <br/>
              </div>

              <div className='margin-bottom-20px'>
                <input type="radio" name="paymentOptions" id="paymentCard"
                       onClick={() => this.setState({payMethod: "card"})}/>
                <label className='padding-left' htmlFor="paymentCard">Credit / Debit Card</label>
                <br/>
              </div>


              <div className='margin-bottom-20px'>
                <input type="radio" name="paymentOptions" id="ACH" value="ACH"
                       onClick={() => this.setState({payMethod: "ach"})}/>
                <label className='padding-left' htmlFor="ACH">ACH</label>
                <br/>
              </div>

              <div className='margin-bottom-20px'>
                <input type="radio" name="paymentOptions" id="cash" value="Cash"
                       onClick={() => this.setState({payMethod: "cash"})}/>
                <label className='padding-left' htmlFor="cash">Cash</label>
              </div>
            </div>
          </div>

          <div>

            <div className='center-align'>
              <button type="submit" className={`ui circular green button`} onClick={() => {
                let type = this.state.payMethod;
                let paymentReceived = Entity.invoices[0].amountDue;
                let user = {
                  firstName: Entity.firstName,
                  lastName: Entity.lastName
                };

                this.props.history.push(`/payments/confirmation/${user.firstName}/${type}/${paymentReceived}/${bankAccountsLast4}`);

              }}>MAKE PAYMENT
              </button>
            </div>

          </div>
          <div className="center-align margin10">
            <input type="checkbox" id="recurring"/>
            <label className='padding-left' htmlFor="recurring">Make Recurring Payment</label>
          </div>
        </main>
      )
    }
    return <div>Loading...</div>
  }
}


const EntityQuery = gql`
  query ($id: ID) {
    Entity(id: $id) {
        id
        firstName
        lastName
      invoices {
        id
        amountDue
        dueDate
        recurring
      }
      bankAccounts {
        id
        accNumber
        bankName
        routingNumber
      }    
      paymentCards {
        id
        cardNum
        expDate
        type
        name
        }
     }
  }
`;


const clickToPayWithRouter = withRouter(compose(
  graphql(EntityQuery, {options: ({match}) => ({variables: {id: "cj9bsppxb0caz0138q8g0a84p"}})})
)(ClickToPay));


export default clickToPayWithRouter;
