import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    test: 0
  }

static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.title != prevState.title) {
    return {
      title: nextProps.title 
    };
  }
  return null;
}

shouldComponentUpdate(nextProps, nextState) { 
  if (this.state.title != nextState.title) { 
    return true;
  } 
  return false;
}

render(){
  return (
    <p>Hello World</p>
  )
}

componentWillUnmount(){}

}

export default App;

