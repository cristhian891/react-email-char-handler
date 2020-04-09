import React from "react";
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="paragraph">
            <p>This is my Username: {props.username}</p>
            <p>This is my Username2: {props.username}</p>
        </div>
    )
};

export default userOutput