import React, { Component } from 'react';
import { graphql, gql, compose } from 'react-apollo';
import { withRouter } from 'react-router';

import MakeNoteOnCustomerWithMutationFunction from './AllCustomerCommunicationButtons/MakeNoteOnCustomer/MakeNoteOnCustomer';
import SendCustomerMessageWithMutationFunction from './AllCustomerCommunicationButtons/SendCustomerMessage/SendCustomerMessage';
import SendCustomerInvoiceWithMutationFunction from './AllCustomerCommunicationButtons/SendCustomerInvoice';

import SendCustomerMessage from './AllCustomerCommunicationButtons/SendCustomerMessage/SendCustomerMessage';

import {createFilter} from 'react-search-input';
import isEmail from 'isemail';

// THIS IMPORT IS TO ENCAPSULATE THE INPUT FOR THIS PAGE
import './customerfullprofile.css';
import isPhoneNumber from 'is-phone-number';

import AddCustomerPaymentMethods from './CustomerPaymentMethods/AddCustomerPaymentMethod';
import AddCustomerShedule from './CustomerSchedules/AddCustomerSchedule';
// import ProfilePic from '../../../public/CustomerFullProfileAssets/ProfilePic.png';

import UpdateCustomerMessage from './AllCustomerCommunicationButtons/SendCustomerMessage/UpdateCustomerMessage';
import UpdateNoteOnCustomer from './AllCustomerCommunicationButtons/MakeNoteOnCustomer/UpdateNoteOnCustomer';


class CustomerFullProfile extends Component {
  state = {
    Customer: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      id: '',
      groups: [],
      tags: []
    },

    updateCustomerFieldErrors: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },


    customerMainAddress: {
      id: '',
      city: '',
      state: '',
      street: '',
      zip: ''
    },

    communications: [],

    invoices: [],

    notes: [],

    paymentCards: [],
    addresses: [],

    communicationcomponent: true,

    invoicescomponent: false,

    notescomponent: false,

    messagedialog: false,

    customerid: '',

    activecomponent: 'communicationscomponent',

    editinfo: false,
    editadditionalinfo: false,


    newtag: '',
    newlabel: ''
  };


  GroupsLabelGenerator = ({ Customer }, { RemoveGroupOnGroupType }) => {

    if (Customer.groups[0].name.length < 1) return;

    let groupnames = Customer.groups[0].name.slice(0);

    let groupid = Customer.groups[0].id;

    return (groupnames.map((group, i) => (
      <div key={i} className='tags-and-label-spacing display-inline'>
        <div className='ui label'>
          <i className='users icon' />
          {groupnames[i]}
          <i className="delete icon" onClick={() => {
            let groups = groupnames.slice(0);

            let groupindex = groups.indexOf(groupnames[i]);

            if (groupindex > -1) {
              groups.splice(groupindex, 1);
            }
            RemoveGroupOnGroupType({
              variables: { id: groupid, names: groups },
              refetchQueries: [{
                query: CustomerFullProfileQuery,
                variables: { id: this.state.customerid },
              }],
            }).then(response => {
              console.log(response);
            }).catch(e => console.log(e));

          }} />
        </div>
      </div>
    )))
  };

  TagGenerator = ({ Customer }, { RemoveTagOnTagType }) => {

    if (Customer.tags[0].name.length < 1) return;

    let tagnames = Customer.tags[0].name.slice(0);

    let tagid = Customer.tags[0].id;

    return (tagnames.map((tag, i) => (
      <div key={i} className='tags-and-label-spacing display-inline'>
        <div className={`ui tag label`}>
          {tagnames[i]}
          <i className={`delete icon`} onClick={() => {

            let tags = tagnames.slice(0);

            let tagindex = tags.indexOf(tagnames[i]);

            if (tagindex > -1) {
              tags.splice(tagindex, 1);
            }

            RemoveTagOnTagType({
              variables: { id: tagid, names: tags },
              refetchQueries: [{
                query: CustomerFullProfileQuery,
                variables: { id: this.state.customerid },
              }],
            }).then(response => {
              console.log(response);
            }).catch(e => console.log(e));
          }} />
        </div>
      </div>
    )))
  };


  validated = () => {
    let errors = {};

    if (!this.state.Customer.firstName) errors.firstName = 'First Name Required';
    if (!this.state.Customer.email) errors.email = 'Email Required';
    if (!this.state.Customer.phoneNumber) errors.phoneNumber = 'Phone Number Required';


    if (this.state.Customer.email) {
      if (!isEmail.validate(this.state.Customer.email)) {
        errors.email = 'Invalid email';
      }
    }

    if (!isPhoneNumber(this.state.Customer.phoneNumber)) {
      errors.phoneNumber = 'Invalid Phone Number';
    }

    if (this.state.firstName) errors.firstName = '';
    if (this.state.email) errors.email = '';
    if (this.state.phoneNumber) errors.phoneNumber = '';


    this.setState({ updateCustomerFieldErrors: errors });


    if (errors.firstName || errors.email || errors.phoneNumber) return;

    return ((
      !!this.state.Customer.firstName && !!this.state.Customer.email && !!this.state.Customer.phoneNumber
    ))
  };


  KEYS_TO_COMMUNICATIONS_FILTERS = [
    'content'
  ];

  KEYS_TO_INVOICES_FILTERS = [
    'props.number',
    'props.amountDue',
    'props.status',
    'props.sent',
    'props.paid'
  ];

  KEYS_TO_NOTES_FILTERS = [
    'props.content',
    'props.date'
  ];


  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading && nextProps.data.Entity) {
      this.setState({
        Customer: nextProps.data.Entity,
        groups: nextProps.data.Entity.groups,
        addresses: nextProps.data.Entity.addresses,
        communications: nextProps.data.Entity.communications,
        invoices: nextProps.data.Entity.invoices,
        notes: nextProps.data.Entity.notes,
        paymentCards: nextProps.data.Entity.paymentCards,
        customerid: nextProps.data.Entity.id
      });
      if (nextProps.data.Entity.addresses.length >= 1) {
        const { addresses } = nextProps.data.Entity;
        let primaryAddress = addresses[0];
        const { id, city, state, street, zip } = primaryAddress;
        let customerMainAddress = {};

        customerMainAddress.id = id;
        customerMainAddress.city = city;
        customerMainAddress.state = state;
        customerMainAddress.street = street;
        customerMainAddress.zip = zip;

        this.setState({ customerMainAddress })
      }


    }
  }


  handleSearch = (e, activecomponent) => {
    console.log(activecomponent);
    console.log(e.target.value);
    e.preventDefault();
    if (activecomponent === 'communicationscomponent') {
      this.setState({ communicationssearch: e.target.value });
    } else if (activecomponent === 'invoicescomponent') {
      this.setState({ invoicessearch: e.target.value })
    } else if (activecomponent === 'notescomponent') {
      this.setState({ notessearch: e.target.value })
    }
  };


  // STATUS WILL BE DEFAULT CREATED
  // THEN THESE OTHER FIELDS BELOW
  // SENT
  // LATE
  // PAID

  // ADD A BY COMPANY FILTER
  //
  //
  // prefilter = (props) => {
  //   return (props.communications.map(communication => <div>{communication}</div>).map(a => console.log(a)));
  //     };


  CommunicationsContainer = ({ allcommunications }) => (
    <div className="actions-view__parent">
      <table className='actions-view__child'>
        <thead>
        <tr>
          <th className='typetocontentdateaction_type center-align'>TYPE</th>
          <th className='typetocontentdateaction_to center-align'>TO</th>
          <th className='typetocontentdateaction_content center-align'>CONTENT</th>
          <th className='typetocontentdateaction_date center-align'>DATE</th>
          <th className='typetocontentdateaction_action center-align'>EDIT</th>
          <th className='typetocontentdateaction_delete center-align'>DELETE</th>
        </tr>
        </thead>
        {allcommunications}
      </table>
    </div>
  );


  Communications = ({ communications }) => {
    const filteredcommunications = communications.filter(createFilter(this.state.communicationssearch, this.KEYS_TO_COMMUNICATIONS_FILTERS));
    return (filteredcommunications.map(communication => (
      <thead key={communication.id}>
      <tr>
        <td className='center-align'>{communication.type}</td>
        <td className='center-align'>{communication.to}</td>
        <td className='center-align'>{communication.content}</td>
        <td className='center-align'>{communication.date}</td>
        <td className='center-align view-button-padding'>
          <UpdateCustomerMessage id={communication.id} message={communication.content} />
        </td>
        <td className="center-align">
          <i className={`large trash icon cursor-pointer`} onClick={() => {
            const result = window.confirm('Are you sure?');
            if (result === false) return;

              this.props.DeleteCommunicationNode({ variables: { id: communication.id } }).then(response => {
                alert('Communication Deleted!');
                window.location.reload('');
              }).catch(e => console.log(e))
            }} />
          </td>
        </tr>
      </thead>
    )));
  };


  InvoicesContainer = ({ allinvoices }) => (
    <div className="actions-view__parent">
      <table className='actions-view__child'>
        <thead>
        <tr>
          <th className='numberamountstatusdatesentdatepaidaction_number'>NUMBER</th>
          <th className='numberamountstatusdatesentdatepaidaction_amount'>AMOUNT</th>
          <th className='numberamountstatusdatesentdatepaidaction_status'>STATUS</th>
          <th className='numberamountstatusdatesentdatepaidaction_datesent'>DATE SENT</th>
          <th className='numberamountstatusdatesentdatepaidaction_datepaid'>DATE PAID</th>
          <th className='numberamountstatusdatesentdatepaidaction_action'>EDIT</th>
          <th className='numberamountstatusdatesentdatepaidaction_delete'>DELETE</th>
        </tr>
        </thead>
        {allinvoices}
      </table>
    </div>
  );


  Invoices = ({ invoices }) => {
    const filteredinvoices = invoices.filter(createFilter(this.state.invoicessearch, this.KEYS_TO_INVOICES_FILTERS));
    return (filteredinvoices.map(invoice => (
      <thead key={invoice.id}>
      <tr>
        <td className='center-align'>{invoice.number}</td>
        <td className='center-align'>{invoice.amountDue}</td>
        <td className='center-align'>{invoice.status}</td>
        <td className='center-align'>{invoice.sent}</td>
        <td className='center-align'>{invoice.paid}</td>
        <td className='center-align view-button-padding'>
          <button className="ui primary basic black circular small button" onClick={() => {
            alert('This should list a detailed communications view.')
          }}>View
          </button>
          </td>
          <td className="center-align">
            <i className={`large trash icon cursor-pointer`} onClick={() => {
              const result = window.confirm('Are you sure?');
              if (result === false) return;

              this.props.DeleteInvoiceNode({ variables: { id: invoice.id } }).then(response => {
                alert('Invoice Deleted!');
                window.location.reload('');
              }).catch(e => console.log(e))
            }} />
          </td>
        </tr>
      </thead>
    )));
  };


  NotesContainer = ({ allnotes }) => (
    <div className="actions-view__parent">
      <table className='actions-view__child'>
        <thead>
        <tr>
          <th className='contentdateaction_content center-align'>CONTENT</th>
          <th className='contentdateaction_date center-align'>DATE</th>
          <th className='contentdateaction_action center-align'>EDIT</th>
          <th className='contentdateaction_delete center-align'>DELETE</th>
        </tr>
        </thead>
        {notes.filter(createFilter(this.state.notessearch, this.KEYS_TO_NOTES_FILTERS))}
      </table>
    </div>
  );

  Notes = ({ notes }) => {
    const filterednotes = notes.filter(createFilter(this.state.notessearch, this.KEYS_TO_NOTES_FILTERS));
    return (filterednotes.map(note => (
      <thead key={note.id}>
      <tr>
        <td className='center-align'>{note.content}</td>
        <td className='center-align'>{note.date}</td>
        <td className='center-align view-button-padding'>
            <UpdateNoteOnCustomer id={note.id} note={note.content} />
        </td>
        <td className="center-align">
          <i className={`large trash icon cursor-pointer`} onClick={() => {
            const result = window.confirm('Are you sure?');
            if (result === false) return;
            this.props.DeleteNoteNode({variables: {id: note.id}}).then(response => {
              alert('Note Deleted!');
              window.location.reload('');
            }).catch(e => console.log(e));
          }}/>
        </td>
      </tr>
      </thead>
    )));
  };


  RenderSearchBar = (props) => {
    let placeholder = 'Search ';
    let activecomponent = props.categorySearch;
    placeholder += activecomponent;
    return (
      <div className="ui category search">
        <div className="ui icon input">
          <form onSubmit={(e) => this.handleSearch(e)}>
            <input className="prompt" type="text" placeholder={placeholder}
              onChange={(e) => {
                this.handleSearch(e, activecomponent)
              }} />
          </form>
          <i className="search icon" />
        </div>
      </div>
    )
  };


  render() {
    const { Customer } = this.state;
    const { communications, invoices, notes, paymentCards } = this.state;
    const { communicationcomponent, invoicescomponent, notescomponent } = this.state;
    const { CommunicationsContainer, InvoicesContainer, NotesContainer } = this;
    const { Communications, Invoices, Notes } = this;
    const { RenderSearchBar } = this;
    const { TagGenerator, GroupsLabelGenerator } = this;
    const { tags, groups } = this.state.Customer;
    const { RemoveGroupOnGroupType, RemoveTagOnTagType } = this.props;


    if (!this.props.data.loading && this.props.data.Entity) {
      return (
        <main>


          <div className="customer-search-bar__customer-full-profile-page">
            <div className='ui category search'>
              <div className="ui icon input">
                <form onSubmit={(e) => this.handleInvoiceSearch(e)}>
                  <input className="prompt" type="text" placeholder="Search Customers..." ref="customer" />
                </form>
                <i className="search icon" />
              </div>
            </div>
          </div>


          <br />


          <div className='customerinfo__parent'>

            <div className='customer-info-view-width'>

              <div className="customerinfo__child">
                <div className='info'>INFO
                  <i className={`large write icon cursor-pointer float-right`} onClick={() => {
                    this.setState({ editinfo: !this.state.editinfo })
                  }} /></div>


                {/*<div className="customer-profile-background-image">*/}
                  {/*{ProfilePic}*/}
                {/*</div>*/}

                {this.state.editinfo ?

                  (<div className='edit-customer-main-profile'>

                    <br />
                    <div className='center-align customer-name'>
                      <input type='text' className='center-align'
                        value={this.state.Customer.firstName}
                        onChange={(e) => {

                          let Customer = Object.assign({}, this.state.Customer);
                          Customer.firstName = e.target.value;

                          if (e.target.value.length > 0) {
                            let updateCustomerFieldErrors = Object.assign({}, this.state.updateCustomerFieldErrors);
                            updateCustomerFieldErrors.firstName = '';
                            this.setState({ updateCustomerFieldErrors });
                          }

                          this.setState({ Customer });
                        }} />
                      {this.state.updateCustomerFieldErrors.firstName ? <br /> : null}
                      <span style={{ color: 'red' }}>{this.state.updateCustomerFieldErrors.firstName}</span>

                    </div>

                    <div className='center-align customer-email'>
                      <input type='text' className='center-align'
                        value={this.state.Customer.email}
                        onChange={(e) => {
                          let Customer = Object.assign({}, this.state.Customer);
                          Customer.email = e.target.value;

                          if (e.target.value.length > 0) {
                            let updateCustomerFieldErrors = Object.assign({}, this.state.updateCustomerFieldErrors);
                            updateCustomerFieldErrors.email = '';
                            this.setState({ updateCustomerFieldErrors });
                          }

                          this.setState({ Customer })
                        }} />
                      {this.state.updateCustomerFieldErrors.email ? <br /> : null}
                      <span style={{ color: 'red' }}>{this.state.updateCustomerFieldErrors.email}</span>
                    </div>

                    <div className='center-align customer-phonenumber'>
                      <input type='text' className='center-align'
                        value={this.state.Customer.phoneNumber}
                        onChange={(e) => {
                          let Customer = Object.assign({}, this.state.Customer);
                          Customer.phoneNumber = e.target.value;

                          if (e.target.value.length > 0) {
                            let updateCustomerFieldErrors = Object.assign({}, this.state.updateCustomerFieldErrors);
                            updateCustomerFieldErrors.phoneNumber = '';
                            this.setState({ updateCustomerFieldErrors });
                          }

                          this.setState({ Customer })
                        }} />
                      {this.state.updateCustomerFieldErrors.phoneNumber ? <br /> : null}
                      <span style={{ color: 'red' }}>{this.state.updateCustomerFieldErrors.phoneNumber}</span>
                    </div>

                    <div className="center-align">
                      <input type="text" className='center-align'
                        value={this.state.customerMainAddress.street}
                        onChange={(e) => {
                          let customerMainAddress = Object.assign({}, this.state.customerMainAddress);
                          customerMainAddress.street = e.target.value;

                          this.setState({ customerMainAddress })
                        }} /></div>
                    <div className="center-align">
                      <input type="text" className='center-align'
                        value={this.state.customerMainAddress.city} onChange={(e) => {
                          let customerMainAddress = Object.assign({}, this.state.customerMainAddress);
                          customerMainAddress.city = e.target.value;

                          this.setState({ customerMainAddress })
                        }} /></div>
                    <div className="center-align">

                      <select onChange={(e) => {
                        let customerMainAddress = Object.assign({}, this.state.customerMainAddress);
                        customerMainAddress.state = e.target.value;

                        this.setState({ customerMainAddress });
                      }}>
                        <option value=''>&nbsp;</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>

                    </div>


                    <div className="center-align">
                      <input type="text" className='center-align'
                        value={this.state.customerMainAddress.zip} onChange={(e) => {
                          let customerMainAddress = Object.assign({}, this.state.customerMainAddress);
                          customerMainAddress.zip = e.target.value;

                          this.setState({ customerMainAddress })
                        }} />
                      <br />
                      <br />
                      Update<i className={`big external icon cursor-pointer`} onClick={() => {

                      if (this.validated()) {
                        this.props.UpdateEntity({
                          variables: {
                            firstName: this.state.Customer.firstName,
                            lastName: this.state.Customer.lastName,
                            email: this.state.Customer.email,
                            phoneNumber: this.state.Customer.phoneNumber,

                              addressId: this.state.customerMainAddress.id,
                              street: this.state.customerMainAddress.street,
                              city: this.state.customerMainAddress.city,
                              state: this.state.customerMainAddress.state,
                              zip: this.state.customerMainAddress.zip
                            },
                            refetchQueries: [{
                              query: CustomerFullProfileQuery,
                              variables: { id: this.state.customerid },
                            }]
                          }).then(response => {
                            console.log(response);
                            this.setState({ editinfo: !this.state.editinfo });
                          }).catch(e => console.log(e))
                        }
                      }} />
                    </div>

                  </div>)

                  :

                  ((customer) => (
                    <div key={customer.id} className='customer-main-profile'>
                      <div className="center-align customer-name">
                        {customer.firstName}
                      </div>
                      <div className="center-align customer-email">
                        <a href=''>{customer.email}</a>
                      </div>
                      <div className="center-align customer-phonenumber">
                        {customer.phoneNumber}
                      </div>
                      <div
                        className="center-align customer-address">{this.state.customerMainAddress.street}</div>
                      <div
                        className="center-align customer-address">{this.state.customerMainAddress.city + ','} &nbsp;
                        <span
                          className="center-align customer-address">{this.state.customerMainAddress.state} &nbsp;</span>
                        <span
                          className="center-align customer-address">{this.state.customerMainAddress.zip}</span>
                      </div>

                    </div>
                  ))(this.state.Customer)}


              </div>


              <div className='customeradditionalinfo__child'>
                <div className='additional-info'>ADDITIONAL INFO
                  <i className={`large write icon cursor-pointer float-right`} onClick={() => {
                    this.setState({ editadditionalinfo: !this.state.editadditionalinfo });
                  }} /></div>


                <br />
                <div className='margin-bottom-5px padding-on-database-icon'>
                  <i className={`large database icon`} /><span
                    className='font-size18'>Source: Import on {'02-11-17'}</span>
                </div>
                <br />
                <div className='margin-bottom-5px padding10'>
                  <i className='large users icon' /><span
                    className='font-size18'>{groups.length ? GroupsLabelGenerator({ Customer }, { RemoveGroupOnGroupType }) : null}</span>
                </div>

                {this.state.editadditionalinfo ?
                  <div className='center-align'>

                    <form onSubmit={(e) => {
                      e.preventDefault();

                      let groups;
                      let groupid;
                      if (this.state.Customer.groups.length) {
                        if (this.state.Customer.groups[0].name) {
                          groups = this.state.Customer.groups[0].name.slice(0)
                        }
                        if (this.state.Customer.groups[0].id) groupid = this.state.Customer.groups[0].id;
                      }

                      let groupindex = groups.indexOf(this.state.newlabel);

                      if (groupindex > -1) return;

                      groups.push(this.state.newlabel);

                      this.setState({ newlabel: '' });

                      this.props.AddGroupOnGroupType({
                        variables: { id: groupid, names: groups },
                        refetchQueries: [{
                          query: CustomerFullProfileQuery,
                          variables: { id: this.state.customerid },
                        }]
                      }).then(response => {
                        console.log(response);
                        this.refs.groupinput.value = '';
                      }).catch(e => console.log(e));
                    }}>
                      <input type="text" ref='groupinput' className="center-align" onChange={(e) => {
                        this.setState({ newlabel: e.target.value })
                      }} />
                    </form>

                  </div>
                  : null}


                <br />
                <div className='padding10'>
                  <i className='large tag icon' /><span
                    className='font-size18'>{tags.length ? TagGenerator({ Customer }, { RemoveTagOnTagType }) : null}</span>


                </div>
                <br />
                {this.state.editadditionalinfo ?
                  <div className='center-align'>
                    <form onSubmit={(e) => {
                      e.preventDefault();

                      let tags;
                      let tagid;
                      if (this.state.Customer.tags.length) {
                        if (this.state.Customer.tags[0].name) {
                          tags = this.state.Customer.tags[0].name.slice(0)
                        }
                        if (this.state.Customer.tags[0].id) tagid = this.state.Customer.tags[0].id;
                      }

                      let tagindex = tags.indexOf(this.state.newtag);
                      if (tagindex > -1) return;

                      tags.push(this.state.newtag);

                      this.setState({ newtag: '' });

                      this.props.AddTagOnTagType({
                        variables: { id: tagid, names: tags },
                        refetchQueries: [{
                          query: CustomerFullProfileQuery,
                          variables: { id: this.state.customerid },
                        }]
                      }).then(response => {
                        console.log(response);
                        this.refs.taginput.value = '';
                      }).catch(e => console.log(e));
                    }}>
                      <input type="text" ref='taginput' className="center-align top-90" onChange={(e) => {
                        this.setState({ newtag: e.target.value })
                      }} />
                    </form>
                  </div>
                  : null}
              </div>


              <div className='customerotherinfo__child'>


                <div className='customerpaymentmethods__child'>


                  {/*ADD CUSTOMER PAYMENT METHOD BUTTON*/}
                  <AddCustomerPaymentMethods />


                  <div className='payment-card-icon' onClick={() => null}>
                    <i
                      className='large credit card alternative icon' /><span
                        className='font-size18'>{'xxxx-xxxx-xxxx-'}{paymentCards.length === 1 ? paymentCards[0].cardNum.substring(12, 16) : 'xxxx'}</span>
                    <i className={`large write icon cursor-pointer float-right`} />
                  </div>
                  <div className='payment-card-icon'>
                    <i
                      className='large credit card alternative icon' /><span
                        className='font-size18'>{'xxxx-xxxx-xxxx-'}{paymentCards.length > 1 ? paymentCards[1].cardNum.substring(12, 16) : 'xxxx'}</span>
                    <i className={`large write icon cursor-pointer float-right`} />

                  </div>
                  <div className='payment-card-icon'>
                    <i
                      className='large credit card alternative icon' /><span
                        className='font-size18'>{'xxxx-xxxx-xxxx-'}{paymentCards.length > 2 ? paymentCards[2].cardNum.substring(12, 16) : 'xxxx'}</span>
                    <i className={`large write icon cursor-pointer float-right`} />

                  </div>


                </div>

                <div className='customerschedules__child' onClick={() => null}>


                  {/*ADD CUSTOMER SCHEDULE BUTTON*/}
                  <AddCustomerShedule />


                  <div className='calendar-icon'>
                    <i className='large calendar icon' />
                    <i className={`large write icon cursor-pointer float-right`} />
                  </div>
                  <div className='calendar-icon'>
                    <i className='large calendar icon' />
                    <i className={`large write icon cursor-pointer float-right`} />
                  </div>
                  <div className='calendar-icon'>
                    <i className='large calendar icon' />
                    <i className={`large write icon cursor-pointer float-right`} />
                  </div>
                </div>


              </div>

            </div>


          </div>

          <br />


          <RenderSearchBar categorySearch={this.state.activecomponent} />


          <div className='display-buttons-container'>

            {/*THIS DISPLAYS A {CREATE INVOICE} BUTTON*/}
            {this.state.customerid ? <SendCustomerInvoiceWithMutationFunction id={this.state.customerid} />
              : null}

            {/*THIS DISPLAYS A {MAKE NOTE} BUTTON*/}
            {this.state.customerid ? <MakeNoteOnCustomerWithMutationFunction id={this.state.customerid} />
              : null}

            {/*THIS DISPLAYS A {SEND MESSAGE} BUTTON*/}
            {this.state.customerid ? <SendCustomerMessageWithMutationFunction id={this.state.customerid} />
              : null}

          </div>


          <span className='communication' onClick={() => {
            this.setState({
              communicationcomponent: true,
              invoicescomponent: false,
              notescomponent: false,
              activecomponent: 'communicationscomponent'
            })
          }}>Communications</span>
          &nbsp;
          &nbsp;
          &nbsp;
          <span className='invoices' onClick={() => {
            this.setState({
              invoicescomponent: true,
              communicationcomponent: false,
              notescomponent: false,
              activecomponent: 'invoicescomponent'
            })
          }}>Invoices</span>
          &nbsp;
          &nbsp;
          &nbsp;
          <span className='invoices' onClick={() => {
            this.setState({
              notescomponent: true,
              communicationcomponent: false,
              invoicescomponent: false,
              activecomponent: 'notescomponent'
            })
          }}>Notes</span>


          {communicationcomponent ? <CommunicationsContainer allcommunications={Communications({ communications })} />
            : null
          }

          {invoicescomponent ?
            <InvoicesContainer allinvoices={Invoices({ invoices })} /> : null
          }

          {notescomponent ?
            <NotesContainer allnotes={Notes({ notes })} /> : null
          }


          {/*{this.prefilter}*/}


        </main>
      );
    }
    return (<div>Loading...</div>)
  }
}


const DeleteCommunicationNode = gql`
mutation($id: ID!) {
  deleteCommunication(id: $id) {
    id
  }
}`;

const DeleteNoteNode = gql`
mutation($id: ID!) {
  deleteNote(id: $id) {
    id
  }
}`;

const DeleteInvoiceNode = gql`
mutation($id: ID!) {
  deleteInvoice(id: $id) {
    id 
  }
}`;

const UpdateEntity = gql`
mutation($id: ID!, $firstName: String!, $lastName: String! $email: String!, $phoneNumber: String!, 
         $addressId: ID!, $city: String!, $street: String!, $state: String!, $zip: String!) {
  updateEntity(
     id: $id
     firstName: $firstName
     lastName: $lastName
     email: $email
     phoneNumber: $phoneNumber) {
     id
  }
  updateAddress(id: $addressId, city: $city, state: $state, zip: $zip, street: $street) {
     id
     city
     state
     street
     zip
  }
}`;

const AddGroupOnGroupType = gql`
mutation($id: ID!, $names: [String!]) {

updateGroup(id: $id 
             name: $names) 
  {
     id
     name
  }
}
`;

const RemoveGroupOnGroupType = gql`
mutation($id: ID!, $names: [String!]) {

updateGroup(id: $id 
             name: $names) 
  {
     id
     name
  }
}
`;

const AddTagOnTagType = gql`
mutation($id: ID!, $names: [String!]) {

updateTag(id: $id 
             name: $names) 
  {
     id
     name
  }
}`;


const RemoveTagOnTagType = gql`
mutation($id: ID!, $names: [String!]) {

updateTag(id: $id 
             name: $names) 
  {
     id
     name
  }
}
`;

const CustomerFullProfileQuery = gql`
query($id: ID!) {
    Entity(id: $id) {
        id
        firstName
        lastName
        email
        phoneNumber
        source
    addresses {
        id
        city
        state
        street
        zip
    }
    invoices {
      id
      amountDue
      dueDate
      recurring
      number
      status
      sent
      paid
    }
    communications {
      id
      type
      to
      content
      date
    }
    paymentCards {
      id
      cardNum
      name
      type
      zip
    }
    notes {
      id
      content
      date
    }
    tags {
      id
      name
    }
    groups {
      id
      name
    }
  } 
}`;


export default withRouter(compose(
  graphql(CustomerFullProfileQuery, { options: ({ match }) => ({ variables: { id: match.params.customer } }) }),
  graphql(UpdateEntity, { name: 'UpdateEntity', options: ({ match }) => ({ variables: { id: match.params.customer } }) }),
  graphql(DeleteCommunicationNode, { name: 'DeleteCommunicationNode' }),
  graphql(DeleteInvoiceNode, { name: 'DeleteInvoiceNode' }),
  graphql(DeleteNoteNode, { name: 'DeleteNoteNode' }),
  graphql(AddGroupOnGroupType, { name: 'AddGroupOnGroupType' }),
  graphql(AddTagOnTagType, { name: 'AddTagOnTagType' }),
  graphql(RemoveGroupOnGroupType, { name: 'RemoveGroupOnGroupType' }),
  graphql(RemoveTagOnTagType, { name: 'RemoveTagOnTagType' })
)(CustomerFullProfile));







































































