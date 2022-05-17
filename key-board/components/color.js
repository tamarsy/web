import React from 'react'

function Colors(props){

    const onButtonClick = (k) => {
        props.onColorClick("currentColor", k);
    };

    const colors = props.colors;

    const colorsButtons = colors.map((k, i) => <button style={{color:`${k}`}} key={i} onClick={() => { onButtonClick(k) }} >{k}</button>)

    return (
        <div>
            <h1>color:</h1>
            <div>
                {colorsButtons}
            </div>
        </div>
    )
}

export default Colors;





