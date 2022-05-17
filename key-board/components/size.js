import React from 'react'

function Size(props){

    const changeSizeOnClick = (k)=>{
        props.changeSize("currentSize", k);
    }
    
    
    const sizes = (props.sizes).map((k, i) => <button key={i} onClick={()=>{ changeSizeOnClick(k) }}>{k}</button>)

    return(
        <div>
            <h1>size:</h1>
            {sizes}
        </div>
    )
}

export default Size