import React, {Component} from 'react';
import {graphql, gql} from 'react-apollo';

import {
  Container,
  Modal,
  Form,
  Button
} from 'semantic-ui-react';

import NoteModal from './NoteModal';






class InvoiceModal extends Component {
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
        trigger={<div className="three-button-spacing"><button onClick={this.handleOpen} className="ui primary basic dark blue circular button">ADD NOTE</button></div>}>
           <NoteModal mutate={this.props.mutate} />
      </Modal>
    )
  }
}








const MakeNoteOnCustomerMutation = gql`
mutation CreateNote($id:ID!, $content:String! $date: String!) {
  createNote (
     entityId: $id
     content: $content
     date: $date
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


const MakeNoteOnCustomerWithMutationFunction = graphql(MakeNoteOnCustomerMutation, {
  options: ({id}) => ({variables: {id}}),
})(InvoiceModal);



export default MakeNoteOnCustomerWithMutationFunction;