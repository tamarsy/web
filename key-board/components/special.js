import React from 'react'




function Special(props){

    const changeStateAll = (name, val) =>{
        props.changeState(name, val);
    }

    const clear = ()=>{
        props.clear();
    }

    const undoLast = ()=>{
        props.undoLast();
    }

    return(
        <div>
            <h1>Special Options:</h1>
            <button onClick={undoLast} >UNDO LAST</button>
            <button onClick={()=>{changeStateAll("text", [])}} >CLEAR ALL</button>
            <button onClick={clear} >CLEAR</button>
            <button onClick={()=>{changeStateAll("currentSizeFont", 0)}} >LOWER</button>
            <button onClick={()=>{changeStateAll("currentSizeFont", 1)}} >UPPER</button>
        </div>

    );
}

export default Special;
