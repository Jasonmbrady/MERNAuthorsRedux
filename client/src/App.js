import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Router, navigate } from "@reach/router";
import ShowAll from './views/ShowAll';
import CreateAuthor from './views/CreateAuthor';
import './App.css';
import UpdateAuthor from './views/UpdateAuthor';

function App() {

  const [authors, setAuthors] = useState([{
    name: "",
  }])

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then(res => setAuthors(res.data))
      .catch(err => console.log(err));
  }, [])

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then((response) => {
        console.log(response);
        setAuthors(authors.filter((author) => author._id !== id));
        navigate("/");
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <ShowAll
          path="/"
          authors={authors}
          deleteHandler={deleteHandler}
        />
        <CreateAuthor
          path="/create"
          setAuthors={setAuthors}
          authors={authors}
        />
        <UpdateAuthor
          path="/update/:id"
          setAuthors={setAuthors}
          authors={authors}
        />
      </Router>
    </div>
  );
}

export default App;
