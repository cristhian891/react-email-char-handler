import React from "react";

const ValidationComponent = (props) => {

    let response = null;
    if (props.len >= 5){
        response = <p>Text too long</p>
    }
    else{
        response = <p>Text too short</p>
    }
    return (
        <div>
            {response}
        </div>
    );
};

export default ValidationComponent