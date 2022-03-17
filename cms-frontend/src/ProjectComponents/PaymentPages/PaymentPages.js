import React, {Component} from 'react';
import {graphql, gql} from 'react-apollo';
import {createFilter} from 'react-search-input';

class Invoices extends Component {

  constructor(props) {
    super(props);

    this.state = {
      invoices: [],
      search: ''
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated = (e) => {
    e.preventDefault();
    this.setState({search: this.refs.invoice.value})
  };


  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading) {
      this.setState({
        invoices: nextProps.data.allInvoices
      });
    }
  }

  KEYS_TO_FILTERS = [
    'props.dueDate',
    'props.amountDue',
    'props.pageName',
    'props.url'
  ];

  Invoice = (props) => (
    <tbody>
    <td className='center-align'>{props.pageName}</td>
    <td className='center-align'>{props.url}</td>
    <td className='center-align'>{props.schedules}</td>
    <td className='center-align'>
        <button className="ui primary basic black circular button" onClick={() => {
          alert('hello')
        }}>View
        </button>
    </td>
    </tbody>
  );

  render() {
    const {Invoice} = this;
    const {invoices} = this.state;
    const allInvoices = invoices.map((invoice) => (
      <Invoice
        pageName={invoice.pageName}
        url={invoice.url}
      />
    ));
    if (!this.props.data.loading && this.props.data.allInvoices) {
      return (
        <div>

          <div className="main-green-button">
            <button className="ui primary basic green circular button">INVOICE</button>
          </div>

          <div className='add-customer-button_search-bar-container'>


            <div className='customer-search-bar__view-invoices-page'>
              <div className="ui category search">
                <div className="ui icon input">
                  <form onSubmit={(e) => this.searchUpdated(e)}>
                    <input className="prompt" type="text" placeholder="Search Invoices..." ref="invoice"
                           onChange={(e) => {
                             if (this.refs.invoice.value.length < 1) {
                               this.setState({search: ""})
                             }}
                           }/>
                  </form>
                  <i className="search icon" />
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="parent">
            <table className="child">
              <th className='pagenameurlschedulesaction_pagename'>PAGENAME</th>
              <th className='pagenameurlschedulesaction_url'>URL</th>
              <th className='pagenameurlschedulesaction_schedules'>SCHEDULES</th>
              <th className='pagenameurlschedulesaction_actions'>ACTIONS</th>
              {allInvoices.filter(createFilter(this.state.search, this.KEYS_TO_FILTERS))}
            </table>
          </div>
        </div>
      )
    } return (<div>...Loading</div>)
  }
}

const allInvoicesQuery = gql`
query{
   allInvoices{
     id
     pageName
     url
     schedules
}}`;

export default graphql(allInvoicesQuery)(Invoices)



// pagename
// url
// schedules
// actions (clone, view edit) -> find another plain button

//
// const query = `{}`;
// const mutation =`{}`;
// request('', query).then(data => console.log(data));
//
//
