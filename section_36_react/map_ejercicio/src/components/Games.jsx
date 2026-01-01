import React from "react";



function Games(props) {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Year: {props.year}</p>
            <p>Mode: {props.mode}</p>
        </div>
    );
}



export default Games;