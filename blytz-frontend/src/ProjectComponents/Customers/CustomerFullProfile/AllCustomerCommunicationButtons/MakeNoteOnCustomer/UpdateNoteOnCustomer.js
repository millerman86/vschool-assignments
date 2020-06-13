import React, {Component} from 'react';
import {graphql, gql} from 'react-apollo';

import NoteModal from './NoteModal';

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
        <NoteModal mutate={this.props.mutate} note={this.props.note} />
      </Modal>
    )
  }
}


const UpdateNote = gql`
mutation($id: ID!, $content: String!) {
  updateNote(
    id: $id
    content: $content
) {
    id
    content
  }
}
`;


const UpdateNoteOnCustomerWithMutationFunction = graphql(UpdateNote, {
  options: ({id}) => ({variables: {id}}),
})(ModalWithButton);

export default UpdateNoteOnCustomerWithMutationFunction;