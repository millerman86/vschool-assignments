import React, {Component} from 'react';
// import {graphql, gql} from 'react-apollo'
import {Modal} from 'semantic-ui-react';





class AddCustomerPaymentMethod extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}












class MessageModal extends Component {
  state = {
    modalOpen: false,
  };

  handleOpen = () => this.setState({modalOpen: true});

  handleClose = () => this.setState({modalOpen: false});


  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
        trigger={
          <div
             className='payment-methods'>PAYMENT METHODS<i
            className={`large plus green icon cursor-pointer float-right`} onClick={this.handleOpen} /></div>
        }>
        <AddCustomerPaymentMethod />
      </Modal>
    )
  }
}




export default MessageModal;





