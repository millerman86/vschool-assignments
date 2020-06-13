import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import { Modal } from 'semantic-ui-react'
import EmailEditor from 'react-email-editor'

class WYSIWYG extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      open: false
    }
  }

  render() {

    return <Modal
      open={this.state.open}
      onClose={e => this.setState({ open: false })}
      trigger={<div className="main-green-button"><button className="ui primary basic circular green button" onClick={e => this.setState({ open: true })} >Create Email Template</button></div>}>
      <div className="center-align">
        <div>

          <div className="padding10"><button className="ui primary basic circular green button" onClick={this.saveDesign}>SAVE</button></div>

          <div className="padding10"><input required type="text" placeholder="Name of Template" onChange={e => this.setState({ name: e.target.value })} /></div>

        </div>


        <EmailEditor
          ref={editor => { this.editor = editor }}
        />

      </div>
    </Modal>


  }

  saveDesign = () => {
    this.editor.saveDesign(design => {
      this.props.exportDesign({
        variables: {
          design: design,
          name: this.state.name,
          type: 'email'
        }
      }).then(() => window.location.replace('/templates'))
        .catch(err => console.log(err))
    })
  }
}

const saveDesignMutation = gql`mutation($name:String!, $design:Json, $type:String){
  createTemplate(
    type:$type
    name:$name
    design:$design
  ){
    id
    name
    design
  }
}`

export default graphql(saveDesignMutation, { name: 'exportDesign' })(WYSIWYG)