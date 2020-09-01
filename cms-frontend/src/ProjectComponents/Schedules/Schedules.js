import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div>
                <div className="main-green-button">
                    <button className="ui primary basic green button">Reminder</button>
                </div>
                <div className="ui category search">
                    <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="Search Reminders"/>
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </div>
        );
    }
}


// const query = `{}`;
// const mutation =`{}`;
// request('', query).then(data => console.log(data));
