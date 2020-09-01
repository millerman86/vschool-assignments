import React, {Component} from 'react';

import {Modal} from 'semantic-ui-react';




class AddCustomerSchedule extends React.Component {
  render() {
    return (
      <div>
        <input type="text"/>



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
             className='schedules'>SCHEDULES<i
            className={`large plus green icon cursor-pointer float-right`} onClick={this.handleOpen} /></div>}>
        <AddCustomerSchedule />
      </Modal>
    )
  }
}



export default MessageModal;




