import React, { useState } from "react";

const BookEntry = ({ newBook }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const handleBookEntry = (event) => {
    event.preventDefault();
    newBook(inputText);
    setInputText("");
  };

  return (
    <div className="bookentry">
      <h2>Store Your Personal Notes</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
        inventore repellendus cupiditate, nobis amet nostrum eaque voluptatum
        voluptatem? Veniam dolor quisquam illum repellat nesciunt eveniet?
        Facilis beatae dolor laudantium velit, iste voluptatem!
      </p>
      <form onSubmit={handleBookEntry}>
        <div>

        <label htmlFor="Name">Enter Note</label>
        </div>
        <div>
        <textarea
          rows="4"
          cols="50"
            onChange={handleChange}
            value={inputText}
            required
            placeholder="Note here..."
          />
        </div>
          
          <button type="submit">Submit</button>
        
      </form>
    </div>
  );
};

export default BookEntry;
