// import logo from './logo.svg';
// import './App.css';

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

// export default App;

// src/App.js
// import React from 'react'
// export const AppContext = createContext();

// function App() {
//   return (
//     <AppContext.Provider value={ 'Bobby Ray' }>
//       <div className="App">
//         <PersonList/>
//       </div>
//     </AppContext.Provider>
//   )
// }

// export function PersonList() {
//   return(
//     <div>Bob Smith</div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <PersonList/>
//     </div>
//   )
// }

//export default App

//TDD React sample video w/Eric

// import React from 'react';
// import UserProfile from './UserProfile';

// const App = () => (
//   <div id='App'>
//     <UserProfile user = 'Jim' email = 'jim@galvanize.com' />
//     </div>
// )
// export default App;

//App.js
//from sample video API stubbing

import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: []
    }
  }
  componenetDidmount() {
    fetch('/cars')
    .then(res => res.json())
    .then(data =>{
      this.setState({
        cars: data.cars
      })
    })
  }
  render() {
    return (
      <div id='cars'>
        {this.state.cars.length ?
        this.state.cars.map((car,index) => (
          <div className='car' key={index}>
            <h1>{car.manufacturer} {car.model}</h1>
            <img scr={car.image}/>
          </div>
        ))
      :
      'There are no cars to display'
      }
      </div>
    )
  }
}