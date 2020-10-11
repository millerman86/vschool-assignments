import React, {Component} from 'react';
import {graphql, gql} from 'react-apollo';
import {createFilter} from 'react-search-input';

import createFragment from 'react-addons-create-fragment';
import {compose} from 'react-apollo';

import {Modal} from 'semantic-ui-react';



class AddInvoice extends Component {

  constructor(props) {
    super(props);

    this.state = {

      invoice: 'blah',
      customers: [],
      templates: [],

      templateSearch: '',
      customerSearch: '',

      selectedTemplate: createFragment({
        id: '',
        name: ''
      }),

      selectedCustomer: createFragment({
        id: '',
        name: ''
      }),

      invoicepayload: createFragment({
        amount: '',
        amountDue: '',
        dueDate: '',
        email: '',
        name: '',
        number: '',
        pageName: '',
        paid: '',
        sent: '',
        status: 'Created',
        url: ''
      })
    };

    this.searchUpdatedForCustomers = this.searchUpdatedForCustomers.bind(this);

    this.searchUpdatedForTemplates = this.searchUpdatedForTemplates.bind(this);
  };

  searchUpdatedForTemplates = (e) => {
    e.preventDefault();
    this.setState({templateSearch: e.target.value})
  };

  searchUpdatedForCustomers = (e) => {
    e.preventDefault();
    this.setState({customerSearch: e.target.value})
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading && nextProps.data.allCustomers) {
      this.setState({
        customers: nextProps.data.allCustomers,
        templates: nextProps.data.allTemplates
      });
    }
  }


  KEYS_TO_TEMPLATE_FILTERS = [
    'props.children'
  ];


  KEYS_TO_CUSTOMER_FILTERS = [
    'props.children'
    // 'props.firstName',
    // 'props.lastName',
  ];




  Customer = ({customers}) => {
    return (customers.map(customer => (
      <div className='cursor-pointer' key={customer.id} onClick={() => this.setState({selectedCustomer: createFragment({name: customer.entity.email, id: customer.id})})}>
        {customer.entity.email}
      </div>
    )).filter(createFilter(this.state.customerSearch, this.KEYS_TO_CUSTOMER_FILTERS)));
  };


  Template = ({templates}) => {
    return (templates.map(template => (
      <div className='cursor-pointer' key={template.id} onClick={() => this.setState({selectedTemplate: createFragment({name: template.name, id: template.id})})}>
        {template.name}
      </div>
    )).filter(createFilter(this.state.templateSearch, this.KEYS_TO_TEMPLATE_FILTERS)))
  };


  render() {

    const {Customer, Template} = this;

    const {mutate} = this.props;

    const {customers, templates} = this.state;

    // const {CreateInvoice} = this.props;

    if (!this.props.data.loading && this.props.data.allCustomers) {
      return (
        <div>
          <h2 className='center-align'>Select An Invoice</h2>
          <br/>
            <p className='center-align'>{this.state.invoice}</p>
            <p>{this.state.selectedTemplate.id}</p>
            <p className='center-align'> dsfasdf</p>


            <label htmlFor="templates">Templates</label>
            <br/>
            <form onSubmit={(e) => this.searchUpdatedForTemplates(e)}
                  onChange={(e) => this.searchUpdatedForTemplates(e)}>
              <input type="text" id="templates"/>
            </form>
            <br/>
            <label htmlFor="customers">Customers</label>
            <br/>
            <form onSubmit={(e) => this.searchUpdatedForCustomers(e)}
                  onChange={(e) => this.searchUpdatedForCustomers(e)}>
              <input type="text" id="customers"/>
            </form>

            {Customer({customers})}
            {Template({templates})}

            {this.state.selectedTemplate}
            {this.state.selectedCustomer}

          <button onClick={() => {
            mutate({
              variables: {
                entityId: this.state.selectedCustomer.id,


                amount: this.state.amount || '',
                amountDue: this.state.invoicepayload.amountDue || '',
                dueDate: this.state.invoicepayload.dueDate || '',
                email: this.state.invoicepayload.email || '',
                name: this.state.invoicepayload.name || '',
                pageName: this.state.invoicepayload.pageName || '',
                paid: this.state.invoicepayload.paid || '',
                sent: this.state.invoicepayload.sent || '',
                status: this.state.invoicepayload.status || '',
                url: this.state.invoicepayload.url || ''
              }
            })
          }}>Submit</button>
        </div>
      )
    } return (<div>...Loading</div>)
  }
}


const TemplateAndCustomersQuery = gql`
    query {
        allTemplates {
            id
            name
        }
        allCustomers {
            id
            entity {
            email   
         }
     } 
}`;



// const CreateInvoice = gql`
// mutation CreateInvoice($enterpriseId: ID!, $entityId: ID!, $amount: String!,
//                        $amountDue: String!, $dueDate: String!, $email: String!,
//                        $name: String!, $number: String!, $pageName: String!,
//                        $paid: String!, $sent: String!, $status: String!, $url: String!) {
//   createInvoice(
//     enterpriseId: $enterpriseId,
//     entityId: $entityId,
//     amount: $amount,
//     amountDue: $amountDue,
//     dueDate: $dueDate,
//     email: $email,
//     name: $name,
//     number: $number,
//     pageName: $pageName,
//     paid: $paid,
//     sent: $sent,
//     status: $status,
//     url: $url
//   ) {
//      id
//   }
// }`;


const AddInvoiceWithMutationFunction = compose(
  graphql(TemplateAndCustomersQuery),
  // graphql(CreateInvoice)
)(AddInvoice);






class InvoiceModal extends Component {
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
        size='large'
        trigger={<div className='main-green-button'><button onClick={this.handleOpen} className="ui primary basic green circular button">
          CREATE INVOICE</button></div>}>
        <AddInvoiceWithMutationFunction />
      </Modal>
    )
  }
}



export default InvoiceModal;









