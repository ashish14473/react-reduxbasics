import React from 'react';
import {connect} from 'react-redux';
import React, { Component } from "react";
import Hello from "./Hello";
import {anotherName} from './actions/myaction'
class App extends Component {
  constructor() {
    super();
  
  }

  render() {
    return (
      <div>
        <Hello name={this.props.myname } />
        <p>Start editing to see some magic happen :)</p>
        <button onClick={()=>{this.props.changeName('suresh')}}> changeit</button>
      </div>
    );
  }
}
  
const mapStateToProps = (state)=>
{
  return{
    myname: state.name
  }
}

const mapDispatchToProps=(dispatch)=>
{
  return {
    changeName : (name)=>{dispatch(anotherName(name))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);