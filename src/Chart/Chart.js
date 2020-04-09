import React from "react";
import './Chart.css'

const ChartComponent = (props) => {

    return (
        <div className="chartBox" onClick={props.delete}>
            <p>Char: {props.charac}</p>
        </div>
    )
};

export default ChartComponent