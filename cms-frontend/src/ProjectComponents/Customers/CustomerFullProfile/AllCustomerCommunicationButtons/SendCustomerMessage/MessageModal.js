import {
  Container,
  Modal,
  Form,
  Button
} from 'semantic-ui-react';
import React, {Component} from 'react';

class MessageModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.message || '',
      mutate: props.mutate,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  render () {

    return (
      <div>
        <Container>

          <h2 className='center-align'>Send Communication</h2>

          <Modal.Content>
            <Form>
              <Form.TextArea
                onChange={this.handleChange}
                value={this.state.text} />
            </Form>
          </Modal.Content>
          <Modal.Actions />
          <div className='sendcustomermessagesubmitbutton'>
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

export default MessageModal;