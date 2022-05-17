import React from 'react'

function KeyBoardButtons(props) {
    const keys = props.keys;

    const onButtonClick = (k) => {
        props.onKeyBoardClick(k);
    };

    const numbers = (props.numbers).map((k, i) => <button key={i} onClick={() => { onButtonClick(k) }} >{k}</button>)
    const keysButtons = keys.map((k, i) => <button key={i} onClick={() => { onButtonClick(k) }} >{k}</button>)

    return (
        <div>
            <h1>keyBoard</h1>
            <div>
                {numbers}
                <br />
                {keysButtons}
            </div>
        </div>
    )
}

export default KeyBoardButtons
