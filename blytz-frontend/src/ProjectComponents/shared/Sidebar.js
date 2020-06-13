/**
 * Created by Douglas on 10/18/2017.
 */
import React, {Component} from 'react'

class Sidebar extends Component {


  render(){

    return(

      <aside className='sidebar'>
        <p className='font-size36'>Dashboard</p>
        <h1>Customers</h1>
        <a href='/import'><h3>Import</h3></a>
        <br/>
        <a href='/groups'><h3>Groups</h3></a>
        <h1>Invoices</h1>
        <a href='/schedules'><h3>Schedules</h3></a>
        <br/>
        <a href='/templates'><h3>Templates</h3></a>
        <br/>
        
        <a href='/paymentpages'><h3>Payment Pages</h3></a>
        <h1>Users</h1>
        <a href='/roles'><h3>Roles</h3></a>
        <br/>
        <a href='/settings'><h3>Settings</h3></a>
        <div className="font-size36">

        </div>
      </aside>
    )
  }
}

export default (Sidebar)