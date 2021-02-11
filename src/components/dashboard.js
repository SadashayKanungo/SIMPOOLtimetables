import React from 'react';
import arrayMove from 'array-move';
import { ListGroup } from 'react-bootstrap';
import {SortableContainer,SortableElement} from 'react-sortable-hoc';

import Pool from './pool.js';
import AddPool from './addpool.js';


const SortablePool = SortableElement((props) => (        
    <ListGroup.Item style={{backgroundColor:"transparent",minHeight: "20rem"}} className="mb-3 mr-3 p-0">
        <Pool {...props} />
    </ListGroup.Item>
));

const SortablePoolList = SortableContainer(({poolList,data,reorder}) => {
  return (
    <ListGroup horizontal>
      {poolList.map((pool, index) => (
        <SortablePool key={pool.name} index={index}
            pool={pool} data={data} poolIndex={index} reorder={reorder}/>
      ))}
    </ListGroup>
  );
});


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            poolList : [{name:"CDCs", courses:[["MATH_F211 L1+T1","MATH_F211 L4+T4"],["ECON_F211 L1+T1"]], nos:2},{name:"DELs", courses:[["EEE_F215 L1+T1+P1","EEE_F215 L2+T2+P4","EEE_F215 L4+T1+P1","EEE_F215 L3+T1+P4"]], nos:1}]
        };
        this.reorder = this.reorder.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);
    }

    reorder(method, poolIndex, courseIndex, oldIndex, newIndex){
        var newPoolList = this.state.poolList.slice();

        if(method==="section"){            
            newPoolList[poolIndex].courses[courseIndex] = arrayMove(newPoolList[poolIndex].courses[courseIndex], oldIndex, newIndex);
        }
        else if(method==="course"){
            newPoolList[poolIndex].courses = arrayMove(newPoolList[poolIndex].courses, oldIndex, newIndex);
        }
        else if(method==="pool"){
            newPoolList = arrayMove(newPoolList, oldIndex, newIndex);
        }
        else {return;}
        console.log(newPoolList);
        this.setState({poolList:newPoolList});
    }

    onSortEnd({oldIndex, newIndex}){
        this.reorder("pool", null, null, oldIndex, newIndex);
    }

    render() {
        return(
            <div className="dashboard pl-4 pt-0 text-center"
                style={{display: "flex", flexWrap: "nowrap", overflow: "auto"}}>
                
                <SortablePoolList poolList={this.state.poolList} data={this.props.data} reorder={this.reorder}
                    axis="x" helperClass="pool text-center rounded" onSortEnd={this.onSortEnd} useDragHandle/>

                <AddPool />
            </div>
        );
    }
}

export default Dashboard;