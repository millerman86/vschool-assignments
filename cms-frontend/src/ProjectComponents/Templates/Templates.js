/**
 * Created by Douglas on 11/7/2017.
 */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo'
import { createFilter } from 'react-search-input';
import CreateEmailTemplate from './CreateEmailTemplate'
import UpdateEmailTemplate from './UpdateEmailTemplate'
import DisableEmailTemplate from './DisableEmailTemplate'
import TextTemplate from './TextTemplate'

class Templates extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Templates: [],
      search: ''
    }
  }

  async componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading && nextProps.data.allTemplates) {
      const t = await nextProps.data.allTemplates.filter(template => template.enabled === true)
        .map((template) => (
          <this.Template
            key={template.id}
            tID={template.id}
            name={template.name}
            type={template.type}
            design={template.design}
            content={template.content}
          />))
      await this.setState({ Templates: t })


    }
  }

  Template = (props) => (
    <tbody>

      <td className='center-align'>{props.name}</td>
      <td className='center-align'>{props.type}</td>
      <td className='center-align'>
        {
          props.type === 'email' ?
            <UpdateEmailTemplate name={props.name} tID={props.tID} design={props.design} />
            :
            <TextTemplate tID={props.tID} name={props.name} content={props.content} />
        }
        <DisableEmailTemplate tID={props.tID} name={props.name} />
      </td>
    </tbody>
  )

  KEYS_TO_FILTERS = [
    'props.name',
    'props.type'
  ]

  render() {

    const { loading } = this.props.data
    const { Templates } = this.state

    if (loading) return <div>loading...</div>

    return (
      <div>

        <CreateEmailTemplate />

        <TextTemplate tID='create' />

        <div className='add-customer-button_search-bar-container'>
          <div className='customer-search-bar__view-invoices-page'>
            <div className="ui category search">
              <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search Templates..." ref="template"
                  onChange={(e) => { this.setState({ search: e.target.value }) }} />
                <i className="search icon" />
              </div>
            </div>
          </div>
        </div>

        <div>

          <div className="view-all-invoices-parent">
            <table className="view-all-invoices-child">
              <th className='pagenameurlschedulesaction'>NAME</th>
              <th className='pagenameurlschedulesaction'>TYPE</th>
              <th className='pagenameurlschedulesaction'>ACTIONS</th>
              {Templates.filter(createFilter(this.state.search, this.KEYS_TO_FILTERS))}
            </table>
          </div>



        </div>

      </div>
    );
  }
}

const allTemplatesQuery = gql`
   query{
    allTemplates{
        id
        name
        type
        design
        content
        enabled
        invoices {
            id
        }
        communications {
            id
        }
        enterprise {
            id
        }
        file {
            id
        }}}`

export default graphql(allTemplatesQuery)(Templates)