import React from 'react';
import hapiserverendpoint from '../../hapiserverendpoint';

// ONE OF THE ABSOLUTE SIMPLEST WAYS OF DOING INPUT!
export default () => {
  let username;
  let password;

  let onSubmit = (e) => {
    e.preventDefault();

    console.log(username.value, password.value);
    let payload = {
      method: 'POST',
      body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  };
    fetch(`${hapiserverendpoint}/v1/login`, payload)
      .then(function (response) {
        return response.json()
      }).then((response) => {
      console.log(response);
      sessionStorage.setItem('token', response.token);
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  return (
      <div>
        <input type="text" ref={node => username = node}/>
        <input type="password" ref={node => password = node}/>
        <button type='submit' onClick={(e) => onSubmit(e)}>SUBMIT</button>
      </div>
  )
};



