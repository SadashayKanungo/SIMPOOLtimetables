import React from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';

class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      counts : {students:0, lists:0, timetables:0},
      clusters : []
    }
  }

  render() {
    return (
      <div className="App">                    
        <Header />          
        
        <Footer />
      </div>
    );
  }
}

export default App;