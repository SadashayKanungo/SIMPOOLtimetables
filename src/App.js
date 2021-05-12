import React from 'react';
import './App.css';
import Header from './components/header.js';
import Dashboard from './components/dashboard.js';
import Footer from './components/footer.js';

//import tempdata from './datadictminnew.json';

const serverURL = 'http://localhost:2000';

class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      counter:{count:null},
      data: {}
    }

    this.getCount = this.getCount.bind(this);
    this.getData = this.getData.bind(this);
  }
  
  getCount(){
    this.setState({...this.state, counter:{count:null}});
    
    fetch(serverURL + '/count')
    .then(response => response.json())
    .then(data => this.setState({...this.state, counter:{count:data}}))
    .catch(error => console.log(error));
  }

  getData(){
    fetch(serverURL + '/data')
    .then(response => response.json())
    .then(datadict => this.setState({...this.state, data:datadict}))
    .catch(error => console.log(error));
  }

  componentDidMount(){
    this.getData();
    this.getCount();
  }

  render() {
    return (
      <div className="App">                     
        <Header server={serverURL} counter={this.state.counter} getCount={this.getCount}/>
        <Dashboard data={this.state.data} serverURL={serverURL}/>
        <Footer />
      </div>
    );
  }
}

export default App;