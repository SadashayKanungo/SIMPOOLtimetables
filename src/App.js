import React from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';

const serverURL = "http://ipaddress";

class App extends React.Component  {
  

  render() {
    return (
      <div className="App">                    
        <Header server={serverURL} />       
        <Footer />
      </div>
    );
  }
}

export default App;