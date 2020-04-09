import React from "react";

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.nameVal}/>
        </div>

    )
};

export default userInput