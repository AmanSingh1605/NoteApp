import { useState } from "react";

let Book = ({name, id, updateBook, deleteBook}) => {
  const [renderForm, setRenderForm] = useState(false);
  const [inputText, setInputText] = useState("");
  let updateForm = <></>;

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    updateBook(inputText, id);
    setInputText("");
    setRenderForm(false);
  };

  if (renderForm === true) {
    updateForm = (
      <div>
        <form onSubmit={handleUpdate}>
          <label>Change:</label>
          <input type="text" onChange={handleChange} value={inputText} />
        </form>
      </div>
    );
  } else {
    updateForm = <></>;
  }
  const updateRender = () => {
    setRenderForm(true);
  };

  const handleDelete = () => {
    deleteBook(id);
  };

  return (
    <div className="Card">
      <div className="Buttons">
        <button className="edit" onClick={updateRender}>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </button>
        <button className="delete" onClick={handleDelete}>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </button>
      </div>
          <p><span style={{color:"#0C6EFC"}}>Note Id: </span>{id}</p>
          <p><span style={{color:"#0C6EFC"}}>Note:</span> {name}</p>
      {updateForm}
    </div>
  );
};

export default Book;
