import React from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';

const serverURL = 'http://localhost:2000';

class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      counter:{count:null}
    }

    this.getCount = this.getCount.bind(this);

  }
  
  getCount(){
    this.setState({counter:{count:null}});
    
    fetch(serverURL + '/count')
    .then(response => response.json())
    .then(data => this.setState({counter:{count:data}}))
    .catch(error => console.log(error));
  }

  componentDidMount(){
    this.getCount();
  }

  render() {
    return (
      <div className="App">                    
        <Header server={serverURL} counter={this.state.counter} getCount={this.getCount}/>       
        <Footer />
      </div>
    );
  }
}

export default App;