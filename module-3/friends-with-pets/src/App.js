import React from 'react';
import './App.css';
import FriendList from './components/FriendList';
import friends from './data/friends';



function App() {
  return (
    <div>
      <FriendList friends={friends} />
    </div>
  )
}

export default App;
