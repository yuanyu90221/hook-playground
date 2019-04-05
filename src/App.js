import React, { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0);
  // [version-1]update the value with pass one value
  // const handleClick = () => setCount(count+1);
  // [version-1]update the value with callback function
  const handleClick = () => setCount((prevCount)=>prevCount+1);
  return (
    <div>
      <button onClick={handleClick}>
        Increase    
      </button>
      <h1>{count}</h1>
    </div>
  )
}
// class App extends Component {
//   render() {
//     return (
//       <Button 
//         activeText="ON"
//         inActiveText="OFF"   
//       />
//     )
//   }
// }

// class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activated: false
//     };
//     this.handleActiveChange = this.handleActiveChange.bind(this);
//   }
//   handleActiveChange() {
//     // this.setState({activated: !this.state.activated});
//     this.setState((prevState)=>{
//       return {
//         activated: !prevState.activated
//       }
//     });
//   }
//   render() {
//     const buttonText = this.state.activated? this.props.activeText:this.props.inActiveText;
//     return (
//       <button onClick={this.handleActiveChange}>
//         {buttonText}
//       </button>
//     )
//   }
// }
export default App;
