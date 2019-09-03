import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  state={
    users:[],
    loading: false
  };

  componentDidMount(){
    this.setState({loading: true});
    axios.get("https://api.github.com/users")
    .then(res=>{
      console.log(res.data);
      this.setState({users: res.data, loading: false});
    })
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
