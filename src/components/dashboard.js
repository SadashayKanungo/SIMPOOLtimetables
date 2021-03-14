import React,{useState} from 'react';
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

const SortablePoolList = SortableContainer(({poolList,data,modifyPoolList,availableCourses}) => {
  return (
    <ListGroup horizontal>
      {poolList.map((pool, index) => (
        <SortablePool key={pool.name} index={index}
            pool={pool} poolIndex={index} modifyPoolList={modifyPoolList} data={data} poolList={poolList} availableCourses={availableCourses} />
      ))}
    </ListGroup>
  );
});


export default function Dashboard(props){


        
        const[poolList,setpoollist] = useState(
                [
                    {   
                        name:"CDCs", 
                        courses:[["MATH_F211 L1+T1","MATH_F211 L4+T4"],["ECON_F211 L1+T1"]], 
                        nos:1
                    },
                    {
                        name:"DELs", 
                        courses:[["EEE_F215 L1+T1+P1","EEE_F215 L2+T2+P4","EEE_F215 L4+T1+P1","EEE_F215 L3+T1+P4"],["ECON_F212 L1+T1"]],
                        nos:1
                    }
                ])

        const [availableCourses,setavailableCourses] =useState(Object.keys(props.data));
   



    const findAvailableCourses = (poolList) => {
        return Object.keys(props.data).filter((crscode)=>{
            for(var pool in poolList){
                if(poolList[pool].courses.map((crs)=>(crs[0].split(' ')[0])).includes(crscode)) return false;
            }
            return true;
        });
    }

    const modifyPoolList=(method, poolIndex, courseIndex, oldData, newData)=>{
        var newPoolList = poolList.slice();

        if(method==="sectionAdd"){            
            newPoolList[poolIndex].courses[courseIndex].push("");
        }
        else if(method==="courseAdd"){
            newPoolList[poolIndex].courses.push([newData + ' ' + Object.keys(props.data[newData].sec)[0]]);
        }
        else if(method==="poolAdd"){
            newPoolList.push({name:newData, courses:[], nos:0});
        }
        else if(method==="sectionMove"){            
            newPoolList[poolIndex].courses[courseIndex] = arrayMove(newPoolList[poolIndex].courses[courseIndex], oldData, newData);
        }
        else if(method==="courseMove"){
            newPoolList[poolIndex].courses = arrayMove(newPoolList[poolIndex].courses, oldData, newData);
        }
        else if(method==="poolMove"){
            newPoolList = arrayMove(newPoolList, oldData, newData);
        }
        else if(method==="sectionDel"){            
            newPoolList[poolIndex].courses[courseIndex].splice(oldData,1);
        }
        else if(method==="courseDel"){
            newPoolList[poolIndex].courses.splice(oldData,1);            
        }
        else if(method==="poolDel"){
            newPoolList.splice(oldData,1);
        }
        else if(method==="poolNos"){
            newPoolList[poolIndex].nos = newData;
        }
        else {return;}

        setpoollist(newPoolList);
        setavailableCourses(findAvailableCourses(newPoolList));
    }

    const onSortEnd=({oldIndex, newIndex})=>{
        modifyPoolList("poolMove", null, null, oldIndex, newIndex);
    }


        return(
            <div className="dashboard pl-4 pt-0 text-center"
                style={{display: "flex", flexWrap: "nowrap", overflow: "auto"}}>
                
                <SortablePoolList poolList={poolList} data={props.data} availableCourses={availableCourses} modifyPoolList={modifyPoolList}
                    axis="x" helperClass="pool text-center rounded" onSortEnd={onSortEnd} useDragHandle/>

                <AddPool poolList={poolList} modifyPoolList={modifyPoolList}/>
            </div>
        );
}

