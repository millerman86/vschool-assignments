import React, {Component} from 'react';
import {graphql, gql} from 'react-apollo';

import MessageModal from './MessageModal';
import {
  Container,
  Modal,
  Form,
  Button
} from 'semantic-ui-react';



class ModalWithButton extends Component {
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
        trigger={<div className="three-button-spacing"><button onClick={this.handleOpen} className="ui primary basic green circular button">SEND MESSAGE</button></div>}>
            <MessageModal mutate={this.props.mutate} />
      </Modal>
    )
  }
}




const CreateCommunicationForEntity = gql`
mutation CreateCommunication($id:ID!, $content:String! $date: String!) {
  createCommunication (
     entityId: $id
     content: $content
     to: ""
     date: $date
     type: ""
)
  {
     id
     content
     date
     entity {
       id
    }
  }
}
`;



const SendCustomerMessageWithMutationFunction = graphql(CreateCommunicationForEntity, {
  options: ({id}) => ({variables: {id}}),
})(ModalWithButton);



export default SendCustomerMessageWithMutationFunction;