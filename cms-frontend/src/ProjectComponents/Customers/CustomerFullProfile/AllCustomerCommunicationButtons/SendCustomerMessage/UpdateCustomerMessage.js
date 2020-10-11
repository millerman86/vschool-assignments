import React, {Component} from 'react';
import {graphql, gql} from 'react-apollo';

import MessageModal from './MessageModal';

import {
  Modal,
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
        trigger={<button className="ui primary basic black small circular button" onClick={this.handleOpen}>EDIT
          </button>}>
        <MessageModal mutate={this.props.mutate} message={this.props.message} />
      </Modal>
    )
  }
}


const UpdateCommunication = gql`
mutation($id: ID!, $content: String!) {
  updateCommunication(
    id: $id
    content: $content
) {
    id
    content
  }
}
`;


const UpdateCustomerMessageWithMutationFunction = graphql(UpdateCommunication, {
  options: ({id}) => ({variables: {id}}),
})(ModalWithButton);

export default UpdateCustomerMessageWithMutationFunction;