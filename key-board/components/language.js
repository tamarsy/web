import React from 'react'

function Language(props){

    const changeCurrntLanguages = (k)=>{
        props.changeLanguge("currentLanguage", k);
    }

    const currntLanguages = (props.Languages).map((k, i) => <button key={i} onClick={()=>{ changeCurrntLanguages(k) }}>{k}</button>)

    return (
        <div>
            <h1>language:</h1>
            <div>
                {currntLanguages}
            </div>
        </div>
    )
}

export default Language