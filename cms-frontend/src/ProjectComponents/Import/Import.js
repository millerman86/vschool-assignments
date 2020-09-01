import React, { Component } from 'react';


export default class extends Component {
    render() {
        return (
            <div>
                <div className="main-green-button">
                    <p>Automated Imports</p>
                    <button className="ui primary basic green button">AUTOMATED IMPORT</button>
                    {/*Render child component*/}
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="parent">
                    <table className='child'>
                        <tr>
                            <th>JOB NAME</th>
                            <th>INTEGRATION TYPE</th>
                            <th>FREQUENCY</th>
                            <th>SCHEDULE</th>
                            <th>GROUPS</th>
                            <th>ACTION</th>
                        </tr>
                    </table>
                </div>
                <div className="main-green-button">
                    <p>Manual Imports</p>
                    <button className="ui primary basic green button">MANUAL IMPORT</button>
                    {/*Render child component*/}
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className="parent">
                    <table className='child'>
                        <tr>
                            <th>JOB NAME</th>
                            <th>IMPORT DATE</th>
                            <th>RECORDS IMPORTED</th>
                            <th>RECORDS FAILED</th>
                            <th>ACTION</th>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}









// Auto->job name
// integration type
// frequency
// schedule
// groups
// action
//
// Manual-> job name
// import date
// records imported
// records failed





// const query = `{}`;
// const mutation =`{}`;
// request('', query).then(data => console.log(data));

