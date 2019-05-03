import React, { Component } from 'react';

// Component
import Navbar from './component/Navbar';
import Carausel from './component/Carausel';
import Event1 from './component/Event1';
import About1 from './component/About1';
import Agenda from './component/Agenda';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar /> 

        <Carausel /> <br></br>

        <About1 />
        <Agenda />
        {/* <Event1 /> <br></br> */}

        

        


      </div>
    );
  }
}

export default App;
