import React, {Component} from 'react';
import {graphql, gql} from 'react-apollo';
import {createFilter} from 'react-search-input';

import AddInvoiceWithMutationFunction from './CreateInvoice';


class Invoices extends Component {

  constructor(props) {
    super(props);

    this.state = {
      invoices: [],
      search: '',
      messageDialog: false
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated = (e) => {
    e.preventDefault();
    this.setState({search: this.refs.invoice.value})
  };


  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading && nextProps.data.allInvoices) {
      this.setState({
        invoices: nextProps.data.allInvoices
      });
    }
  }

  KEYS_TO_FILTERS = [
    'props.number',
    'props.name',
    'props.email',
    'props.status',
    'props.sent',
    'props.paid'
  ];

  Invoice = (props) => (
    <tbody>
    <td className='center-align'>{props.number}</td>
    <td className='center-align'>{props.name}</td>
    <td className='center-align'>{props.email}</td>
    <td className='center-align'>{props.amount}</td>
    <td className='center-align'>{props.status}</td>
    <td className='center-align'>{props.sent}</td>
    <td className='center-align'>{props.paid}</td>
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
        number={invoice.number}
        name={invoice.name}
        email={invoice.email}
        amount={invoice.amount}
        status={invoice.status}
        sent={invoice.sent}
        paid={invoice.paid}
      />
    ));

    if (!this.props.data.loading && this.props.data.allInvoices) {
      return (
        <div>


          <div className='first-row-all-page-parent'>
            <div className="first-row-all-page-child">

              {/*THIS DISPLAYS A GREEN ADD INVOICE BUTTON*/}
              <AddInvoiceWithMutationFunction />


              <div className='customer-search-bar__view-invoices-page'>
                <div className="ui category search">
                  <div className="ui icon input">
                    <form onSubmit={(e) => this.searchUpdated(e)}>
                      <input className="prompt" type="text" placeholder="Search Invoices..." ref="invoice"
                             onChange={(e) => {
                               if (this.refs.invoice.value.length < 1) {
                                 this.setState({search: ""})
                               }
                             }}/>
                    </form>
                    <i className="search icon"/>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="view-all-invoices-parent">
            <table className="view-all-invoices-child">
              <th className='pagenameurlschedulesaction'>NUMBER</th>
              <th className='pagenameurlschedulesaction'>NAME</th>
              <th className='pagenameurlschedulesaction'>EMAIL</th>
              <th className='pagenameurlschedulesaction'>AMOUNT</th>
              <th className='pagenameurlschedulesaction'>STATUS</th>
              <th className='pagenameurlschedulesaction'>SENT</th>
              <th className='pagenameurlschedulesaction'>PAID</th>
              <th className='pagenameurlschedulesaction'>ACTIONS</th>
              {allInvoices.filter(createFilter(this.state.search, this.KEYS_TO_FILTERS))}
            </table>
          </div>
        </div>
      )
    }
    return (<div>...Loading</div>)
  }
}

const AllInvoicesQuery = gql`
    query{
        allInvoices{
            id
            number
            name
            amount
            status
            sent
            paid
        }}`;

export default graphql(AllInvoicesQuery)(Invoices)


