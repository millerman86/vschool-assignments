import React, {Component} from 'react';
import {graphql, gql} from 'react-apollo';



import {
  Container,
  Modal,
  Form,
  Button
} from 'semantic-ui-react';





class SendCustomerInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      mutate: props.mutate
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }



  render () {
    console.log(this.state.id);
    return (
      <div>
        <Container>

            <h2 className='center-align'>Send Invoice</h2>

            <Modal.Content>
              <Form>
                <Form.TextArea
                  onChange={this.handleChange}
                  value={this.state.text} />
              </Form>
            </Modal.Content>
            <Modal.Actions />
            {/*<button>lkjlkj</button>*/}
            <div className='sendcustomerinvoicesubmitbutton'>
            <Button positive onClick={() => {

              let today = new Date();
              let dd = today.getDate();
              let mm = today.getMonth()+1; //January is 0!
              let yyyy = today.getFullYear();

              if(dd<10) {
                dd = '0'+dd
              }

              if(mm<10) {
                mm = '0'+mm
              }

              today = mm + '/' + dd + '/' + yyyy;

              this.state.mutate({variables: {
                date: today,
                content: this.state.text
              }}).then(data => {
                console.log(data);
                alert('Communication Sent');
                window.location.reload();
              }).catch(err => console.log(err))}}>Submit</Button>
            </div>
            {/*<Button positive onClick={() => this.props.mutate}>Yes</Button>*/}
        </Container>
      </div>
    )
  }
}



const SendCustomerInvoiceMutation = gql`
mutation CreateInvoice($id:ID!, $content:String! $date: String!) {
  createInvoice (
     entityId: $entityId
     templateId: $templateId
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
    template {
      id
      
    }
  }
}
`;





const MakeNoteOnCustomerWithMutationFunction = graphql(SendCustomerInvoiceMutation, {
  options: ({id}) => ({variables: {id}}),
})(SendCustomerInvoice);







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
        trigger={<div className="three-button-spacing"><button onClick={this.handleOpen} className="ui primary basic black circular button">CREATE INVOICE</button></div>}>
           <MakeNoteOnCustomerWithMutationFunction mutate={this.props.mutate} />
      </Modal>
    )
  }
}

export default InvoiceModal;