import React, {Component} from 'react';
import {graphql, gql} from 'react-apollo';
import {createFilter} from 'react-search-input';

import NewCustomerModal from './NewCustomers';

const AllEntitiesQuery = gql`
    query {
    allEntities {
        id
        firstName
        lastName
        email
        phoneNumber
        dob
      }
   }
`;

class DisplayEntitiesOrCustomers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allEntities: [],
      search: '',
      displayModal: false
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated = (e) => {
    e.preventDefault();
    this.setState({search: this.refs.customer.value});
  };

  KEYS_TO_FILTERS = [
    'props.firstName',
    'props.lastName',
    'props.email'
  ];


  _redirectToEntityFullProfile = (id) => {
    this.props.history.push(`/customerfullprofile/${id}`)
  };


  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading && nextProps.data.allEntities) {
      this.setState({allEntities: nextProps.data.allEntities})
    }
  }


  Entity = (props) => (
    <tbody>
    <td className='center-align'>{props.firstName}</td>
    <td className='center-align'>{props.email}</td>
    <td className='center-align'>{props.phoneNumber}</td>
    <td className='center-align'>{props.groups}</td>
    <td>
      <div className='center-align view-button-padding'>
        <button className="ui primary basic black small circular button" onClick={() => {
          props.redirecttoentityfullprofile(props.id)
        }}>View
        </button>
      </div>
    </td>
    </tbody>
  );

  render() {
    if (!this.props.data.loading && this.props.data.allEntities) {
      const {Entity} = this;
      const allEntities = this.state.allEntities.map((entity) => (
        <Entity
          firstName={entity.firstName}
          email={entity.email}
          phoneNumber={entity.phoneNumber}
          groups={entity.groups}
          id={entity.id}
          key={entity.id}
          redirecttoentityfullprofile={this._redirectToEntityFullProfile}
        />
      )).filter(createFilter(this.state.search, this.KEYS_TO_FILTERS));

      return (
        <div>


          <div className='first-row-all-page-parent'>
            <div className="first-row-all-page-child">

              {/*THIS DISPLAYS A GREEN ADD CUSTOMER BUTTON*/}
              <NewCustomerModal/>

              <div className='customer-search-bar__view-customers-page'>
                <div className="ui category search">
                  <div className="ui icon input">
                    <form onSubmit={(e) => this.searchUpdated(e)}>
                      <input className="prompt" type="text" placeholder="Search Customers..." name='customer'
                             ref="customer"
                             onChange={(e) => {
                               if (this.refs.customer.value.length < 1) {
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


          <div className="view-all-customers__parent">
            <table className='view-all-customers__child'>
              <th className='nameemailphonegroupsaction_name'>NAME</th>
              <th className='nameemailphonegroupsaction_email'>EMAIL</th>
              <th className='nameemailphonegroupsaction_phone'>PHONE</th>
              <th className='nameemailphonegroupsaction_groups'>GROUPS</th>
              <th className='nameemailphonegroupsaction_actions'>ACTIONS</th>
              {allEntities}
            </table>
          </div>
        </div>
      );
    }
    return (<div>Loading...</div>)
  }
}


export default graphql(AllEntitiesQuery)(DisplayEntitiesOrCustomers);



