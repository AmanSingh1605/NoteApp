import React, { useState,useEffect } from "react";
import "./App.css";
import BookEntry from "./Elements/BookEntry";
import Book from "./Elements/Book";
import Footer from "./Elements/Footer"
import axios from 'axios';

function App() {
  const [bookList, setBookList] = useState([]);

  const fetchBooks=async()=>{
    const response=await axios.get('http://localhost:3001/books');
    setBookList(response.data);
  }  
  useEffect(()=>{
    fetchBooks();
  },[]);

  const newBook = async(title) => {
    const response=await axios.post('http://localhost:3001/books',{title: title});
    const bookArray=[...bookList,response.data];
    setBookList(bookArray);
  };

  const updateBook = async(title, id) => {
    const response=await axios.put(`http://localhost:3001/books/${id}`,{title: title});
    
    const updatedBook=bookList.map((book)=>{
      if(book.id===id){
        return {...book,...response.data};
      }
      return book;
    });
    setBookList(updatedBook);
  };

  const deleteBook=async(id)=>{
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks=bookList.filter((book)=>{
      return book.id!==id;
    });
    setBookList(updatedBooks);
  }

  const renderBooks = bookList.map((book) => {
    return (
      <Book name={book.title} id={book.id} updateBook={updateBook} deleteBook={deleteBook} key={book.id}  />
    );
  });

  return (
    <div className="App">
      <header>
        <h1>Notes App</h1>
      </header>
      <BookEntry  newBook={newBook} />
      <div className="Cards">{renderBooks}</div>
      <Footer/>
    </div>
  );
}

export default App;
