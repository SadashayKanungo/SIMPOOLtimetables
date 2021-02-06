import React from 'react';
import Pool from './pool.js';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {};//pool list
    }

    render() {
        return(//render poollist
            <div className="dashboard pl-4 pt-0 text-center font-weight-bold" 
                style={{display: "flex", flexWrap: "nowrap", overflow: "auto"}}>
                <Pool />
                <Pool />
                <Pool />
                
                
            </div>
        );
    }
}

export default Dashboard;