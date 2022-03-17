import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import EmailEditor from 'react-email-editor'
import { Modal } from 'semantic-ui-react'

class UpdateTemplate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTemplate: props.design,
      open: false,
      name: props.name,
      tID: props.tID
    }
  }

  render() {

    return (
      <Modal
        open={this.state.open}
        onClose={e => this.setState({ open: false })}
        trigger={<div><button className="ui primary basic circular black button" onClick={e => this.setState({ open: true })}>Edit</button></div>}>
        <div className="center-align">

          <div>

            <div className="padding10"><input required type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} /></div>

          </div>

          <EmailEditor
            ref={editor => { this.editor = editor }}
            onLoad={this.onLoad}
          />

          <div className="padding10"><button className="ui primary basic circular green button" onClick={this.saveDesign}>SAVE</button></div>

        </div>
      </Modal>
    )
  }

  saveDesign = () => {
    this.editor.saveDesign(design => {
      this.props.exportDesign({
        variables: {
          id: this.state.tID,
          name: this.state.name,
          type: this.state.type,
          design: design
        }
      }).then(r =>
        window.location.replace('/templates')
        ).catch(err => console.log(err))
    })
  }

  onLoad = () => { this.editor.loadDesign(this.state.selectedTemplate) }

}

const saveDesignMutation = gql`mutation($id:ID!, $name:String!, $design:Json, $type:String){
  updateTemplate(
    id:$id
    type:$type
    name:$name
    design:$design
  ){
    id
    name
    design
  }
}`

export default graphql(saveDesignMutation, { name: 'exportDesign' })(UpdateTemplate)