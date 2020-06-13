import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div>
                <div className="main-green-button">
                    <button className="ui primary basic green button">NEW GROUP</button>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="parent">
                    <table className='child'>
                        <tr>
                            <th>NAME</th>
                            <th>NO. CUSTOMERS</th>
                            <th>ACTION</th>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}









//
// const query = `{}`;
// const mutation =`{}`;
// request('', query).then(data => console.log(data));
//
