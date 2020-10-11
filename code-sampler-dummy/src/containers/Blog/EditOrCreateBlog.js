import React from 'react';
import hapiserverendpoint from '../../hapiserverendpoint';

import {Button, Modal} from 'semantic-ui-react'
import nl2br from 'nl2br';
import ReactHtmlParser from 'react-html-parser';



// REFACTOR THE ENDPOINTS TO LOOK LIKE THIS
//
// blog/
// blog/:id/edit(update)
// blog/create/
// blog/:id view a single blog


export default class EditOrCreateBlogModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      textArea: this.props.textArea || ''
    };

  }

  onSubmit = () => {

    const payload = {
      method: 'PUT',
      body: this.state.textArea
    };

    fetch(hapiserverendpoint + `/blog`, payload)
      .then(function (response) {
        return response.json()
      }).then(function (response) {
      console.log('parsed json', response);



      window.location.reload(`/blog?topic=${'bananas'}&blogid=${5678}`);




    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  onChange = (e) => {
    this.setState({textArea: e.target.value})
  };


  show = size => () => this.setState({size, open: true});
  close = () => this.setState({open: false});

  render() {
    const {open, size} = this.state;

    return (
      <div>

        <Button onClick={this.show('small')}>Edit Blog</Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            {'Edit Blog Entry'}
          </Modal.Header>
          <Modal.Content>

            {/*THIS WHERE THE PARAGRAPH TEXT GETS PARSED AND AUTOMATICALLY GETS WRITTEN ABOVE THE TEXTAREA BOX*/}
            {ReactHtmlParser(nl2br(this.state.textArea))}


            <strong>
              <p className='center-align'>This textarea html element automatically inserts a new line when you press enter: \n</p>
              <p className='center-align'>When you submit this to the database, the \n escape character is preserved!!</p>
            </strong>
            <form onSubmit={this.onSubmit} className='blog-text-input-container'>
            <textarea value={this.state.textArea} onChange={this.onChange} rows="4" cols="100" className='blog-text-input'>
              {this.state.textArea}
            </textarea>
            </form>


          </Modal.Content>




          <Modal.Actions>
            <Button negative onClick={() => this.close()}>
              Exit
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Submit Blog Entry' onClick={() => this.onSubmit()}/>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

