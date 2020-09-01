

import React from 'react'
import {
  BrowserRouter as
    Router,
  Route,
  Switch
} from 'react-router-dom';
import Import from './ProjectComponents/Import/Import.js';
import Groups from './ProjectComponents/Groups/Groups.js';
import Schedules from './ProjectComponents/Schedules/Schedules';
import Templates from './ProjectComponents/Templates/Templates'
import PaymentPages from './ProjectComponents/PaymentPages/PaymentPages';
import Roles from './ProjectComponents/Roles/Roles';
import Settings from './ProjectComponents/Settings/Settings';
import Customers from './ProjectComponents/Customers/Customers';
import Invoices from './ProjectComponents/Invoices/Invoices';
import CustomerFullProfile from './ProjectComponents/Customers/CustomerFullProfile/CustomerFullProfile';

import Authentication from './PaymentFlow/authentication'
import Confirmation from './PaymentFlow/confirmation'
import ClickToPay from './PaymentFlow/clickToPay'
import Login from './Login'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/invoices" component={Invoices} />
      <Route path="/customerfullprofile/:customer" component={CustomerFullProfile} />
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/import" component={Import} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/schedules" component={Schedules} />
      <Route exact path="/templates" component={Templates} />
      <Route exact path="/paymentpages" component={PaymentPages} />
      <Route exact path="/roles" component={Roles} />
      <Route exact path="/settings" component={Settings} />

      <Route exact path="/payments/authentication" component={Authentication}/>
      <Route exact path="/payments/clickToPay" component={ClickToPay} />
      <Route path="/payments/confirmation/:firstname/:type/:paymentreceived/:bankaccountlast4" component={Confirmation}/>

    </Switch>
  </Router>
)


