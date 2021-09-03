import React, { useState } from "react";

function InputArea(props){

    const [note,saveChanges] = useState({
        title : "",
        content : ""
    });

    function handleChanges(event){

        const {name,value} = event.target;

        saveChanges((prev) => {
            return {
                ...prev,
                [name] : value
            };
        });
    }


    function Submit(event){
        props.onAdd(note);
        saveChanges({
            title: "",
            content : ""
        });

        event.preventDefault();

    }



    return (
        
        <form >
            <input 
            name= "title"
             placeholder = "Title"
             onChange = {handleChanges}
             value = {note.title}
              />
            <textarea 
            name="content" 
            id="" 
            value = {note.content}
            cols="10" 
            rows="3" 
            placeholder = "Content"
            onChange = {handleChanges} ></textarea>
            <button onClick = {Submit}><i class="fa fa-plus" aria-hidden="true"></i></button>
        </form>
    );

}

export default InputArea;