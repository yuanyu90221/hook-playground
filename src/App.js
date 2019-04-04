import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Button 
        activeText="ON"
        inActiveText="OFF"   
      />
    )
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false
    };
    this.handleActiveChange = this.handleActiveChange.bind(this);
  }
  handleActiveChange() {
    // this.setState({activated: !this.state.activated});
    this.setState((prevState)=>{
      return {
        activated: !prevState.activated
      }
    });
  }
  render() {
    const buttonText = this.state.activated? this.props.activeText:this.props.inActiveText;
    return (
      <button onClick={this.handleActiveChange}>
        {buttonText}
      </button>
    )
  }
}
export default App;
