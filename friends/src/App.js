import React, { Component } from 'react';

import { FriendsListView } from "./views"
import './App.css';

class App extends Component {
  render() {
    return (
    	<div>
      		<h1>Mi Amigos!</h1> 
      		<FriendsListView />
      	</div>
    );
  }
}

export default App;
