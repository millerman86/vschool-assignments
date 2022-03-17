import React, {Component} from 'react';

export default class extends Component {
    render() {
        return (
            <div>
                <div className="main-green-button">
                    <button className="ui primary basic green button">NEW USER</button>
                    <div className="ui category search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Search Users"/>
                            <i className="search icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
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
