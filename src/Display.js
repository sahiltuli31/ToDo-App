import React from "react";

function Display(props){

    function deleteItem(){
        props.onDelete(props.id);
    }


    return (
        <div className = "Notes">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button
            onClick = {deleteItem} ><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>);
}

export default Display;