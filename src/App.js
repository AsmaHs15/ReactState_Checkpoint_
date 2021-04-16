import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './Component/Person';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  };


  render() {
    return (

    <div className="App">
        <h1 style={{color:'#6271d6' , fontWeight: 'bold'}}>Checkpoint : React State</h1>
        <button className="visibility-btn" onClick = {this.toggleVisibility}>
          {this.state.isVisible ? 'Hide Profile' : 'Show Profile'}
        </button>

         {this.state.isVisible && <Person   />}
    </div>


  );
}
}

export default App;
