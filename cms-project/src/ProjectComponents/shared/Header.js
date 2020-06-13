/**
 * Created by Douglas on 10/18/2017.
 */
import React, {Component} from 'react'

class Header extends Component{

  render(){


    return(

      <header className="banner">
        <p id="company">vivint.</p>
        <div id="banner-navigation">
          <a href="/dashboard"><p>Dashboard</p></a>
          <a href="/customers"><p>Customers</p></a>
          <a href="/invoices"><p>Invoices</p></a>
          <a href="/users"><p>Users</p></a>
          <a href="/reports"><p>Reports</p></a>
          <a href="/settings"><p>Settings</p></a>
        </div>
      </header>

    )
  }
}

export default (Header)