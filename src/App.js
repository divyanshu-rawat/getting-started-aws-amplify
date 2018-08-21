import React, { Component } from 'react';
import './App.css';
import SignUp from './User_sign_up/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome To Amazon Cognito AWS-Amplify</h2>
         <SignUp />
      </div>
    );
  }
}

export default App;
