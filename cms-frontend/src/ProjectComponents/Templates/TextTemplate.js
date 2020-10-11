import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import { graphql, gql, compose } from 'react-apollo'


class TextTemplate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tID: props.tID,
      name: props.name,
      content: props.content,
      openEdit: false,
      openCreate: false
    }
  }


  render() {

    return <div>
      {this.state.tID === 'create' ?
        <Modal
          open={this.state.openCreate}
          onClose={e => this.setState({ openCreate: false })}
          trigger={<div className="main-green-button"><button className="ui primary basic circular green button" onClick={e => this.setState({ openCreate: true })}>Create Text Template</button></div>}>
          <div className="center-align">
            <div className="padding10">
              <input type="text" name="name" placeholder="Name" onChange={e => this.setState({ name: e.target.value })} />
            </div>
            <div className="padding10">
              <textarea type="text" 
              name="design" 
              placeholder="Message Content..." 
              rows="5" 
              cols="50" 
              onChange={e => this.setState({ content: e.target.value})} 
              />
            </div>
            <div>
              <button className="ui primary basic circular green button" onClick={e => this.createTemplate()}>Save</button>
            </div>
          </div>
        </Modal>

        :

        <Modal
          open={this.state.openEdit}
          onClose={e => this.setState({ openEdit: false })}
          trigger={<div><button className="ui primary basic circular black button" onClick={e => this.setState({ openEdit: true })}>Edit</button></div>}>
          <div className="center-align">
            <div className="padding10">
              <input type="text" name="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
            </div>
            <div className="padding10">
              <textarea type="text" name="design" value={this.state.content} rows="5" cols="50" onChange={e => this.setState({ content: e.target.value})} />
            </div>
            <div>
              <button className="ui primary basic circular green button" onClick={e => this.updateTemplate()}>Save</button>
            </div>
          </div>
        </Modal>}
    </div>
  }

  createTemplate = () => {
    this.props.createTemplate({
      variables: {
        name: this.state.name,
        content: this.state.content,
        type:'text'
      }}).then(r => window.location.replace('/templates'))
      .catch(err => console.log(err))
  }

  updateTemplate = () => {
    this.props.updateTemplate({
      variables: {
        id: this.state.tID,
        name: this.state.name,
        content: this.state.content
      }}).then(r => window.location.replace('/templates'))
      .catch(err => console.log(err))
  }

}

const createTemplate = gql`mutation($name:String!,$content:String,$type:String){
  createTemplate(
    name:$name,
    content:$content,
    type: $type
  ){
    id
  }
}`

const updateTemplate = gql`mutation($id:ID!,$name:String,$content:String){
  updateTemplate(
    id:$id
    name:$name,
    content:$content
  ){
    id
  }
}`

export default compose(
  graphql(createTemplate, { name: 'createTemplate' }),
  graphql(updateTemplate, { name: 'updateTemplate' })
)(TextTemplate)