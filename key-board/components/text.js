import React from 'react'

function Text(props) {

    const text = props.text.map((obj, i) => <t key={i} style={{color:obj.color, fontSize:obj.size}} >{obj.k}</t>)

    return (
        <div>
           {text}
        </div>
    )
}

export default Text;