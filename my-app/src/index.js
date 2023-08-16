import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26
    }
    // 1 this.nextYear = this.nextYear.bind(this);  
    this.nextYear = () => {
      this.setState(state => ({
        years: ++state.years
      }))
    }
  }

  // 3 state = {
  //   years: 26
  // }
  // nextYear = () => {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  // 1 nextYear() {
  //   // this.state.years++ - NOT WORK!!!
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }
  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>+++</button>
        <h3>My name is {name}, surname - {surname}, years - {years}</h3>
        <a href={link}>My profile</a>
      </>
    )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="elax" surname="tets" link="facebook.com"/>
      <WhoAmI name="alsf" surname="trttt" link="facebook.com"/>
      <WhoAmI name="hnhnh" surname="xxxx" link="facebook.com"/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <All/>
    <App/>
  </React.StrictMode>
);
