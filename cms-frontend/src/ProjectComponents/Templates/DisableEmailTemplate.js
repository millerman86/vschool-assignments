import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import {Modal} from 'semantic-ui-react'


class DisableEmailTemplate extends Component {

  constructor(props){
    super(props)
    this.state = {
      open: false,
      tID: props.tID,
      templateName: props.name
    }
  }

  render() {
    return <Modal
      open={this.state.open}
      onClose={e => this.setState({ open: false })}
      trigger={<div><button className="ui primary basic circular red button" onClick={e => this.setState({ open: true })}>Delete</button></div>}>
      <div className="center-align">
        <h2>ARE YOU SURE YOU WANT TO DELETE THIS TEMPLATE?</h2>
        <h3>{this.state.templateName}</h3>
        <button className="ui primary basic red circular button" onClick={() => 
          this.props.disableTemplate({variables:{id:this.state.tID}})
          .then(r => window.location.replace('/templates'))
          .catch(err => console.log(err))
          }>Delete</button>
        <button className="ui primary basic black circular button" onClick={() => this.setState({ open: false })}>Cancel</button>
      </div>
    </Modal>
  }
}

const disableTemplateMutation = gql`mutation($id:ID!,$enabled:Boolean){
  updateTemplate(
    id:$id
    enabled:$enabled
  ){
    id
  }
}`

export default graphql(disableTemplateMutation, { name: 'disableTemplate', options: { variables: { enabled: false }}})(DisableEmailTemplate)