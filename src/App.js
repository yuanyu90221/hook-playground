import React, { useState } from 'react';

function App() {
  // false is the initial state
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const handleCityOnChange = (event)=>{setCity(event.target.value)};
  const handleCountryOnChange = (event)=>{setCountry(event.target.value)};
  return (
    <form>
      <div>
        <input 
          type="text"
          placeholder="City"
          value={city}
          onChange={handleCityOnChange}
        />
        <input 
          type="country"
          placeholder="Country"
          value={country}
          onChange={handleCountryOnChange}
        />
      </div>
      <div>
        You live in {`${city}, ${country}`}
      </div>
    </form>
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
