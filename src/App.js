import React, { useState } from "react";
import Header from "./Header";
import  InputArea  from "./InputArea";
import Display from "./Display";
import Footer from "./Footer";

function App() {

  const [items,saveItem] = useState([]);

  function addItem(newNote){

      saveItem( (prev) => {
        return [...prev,newNote];
      });

  }

  function deleteNote(id){
    saveItem((prev) => {
      return prev.filter((item,index) => {
        return id !== index;
      });
    });

  }

  return (
    <>
   <Header />
   <InputArea 
     onAdd = {addItem}
   />
   {items.map((note,index) => {
     return (<Display

     id = {index}
     title = {note.title}
     content = {note.content} 
     onDelete = {deleteNote}
     />);
   })}
   <Footer />
   </>
  );
}

export default App;
