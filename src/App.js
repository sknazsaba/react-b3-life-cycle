import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  test = "345686";
  constructor(){
    super();
    console.log(this.props);
    this.setState({
      color: "red",
      fname:"Azhar",
      lName: "shaikh",
    });
    console.log("Constructor Method", this.state, this.test);
    
  }
  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromprop called");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate called");
    return true;
  }
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpd called");
  }
  componentDidUpdate(){
    console.log(" componentDidUpdate called");
  }
  componentWillUnmount(){
    console.log("Unmounting");
  }
  componentDidMount(){
    console.log("componentDidMount called");
    setTimeout(() => {
      this.setState({ ...this.State, color:"yellow"});
    },15000 );
  }

  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  }


export default App;
