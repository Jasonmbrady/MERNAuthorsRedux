import React, { useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from "axios";
import Form from '../components/Form';


const CreateAuthor = ({ authors, setAuthors }) => {

    const [name, setName] = useState("")
    const formHandler = (e) => {
        e.preventDefault();
        let newAuthor = { name: name }
        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then((res) => {
                setAuthors([...authors, res.data]);
            })
            .catch(err => console.log(err));
        navigate("/");
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <p>Add a new Author:</p>
            <Form name={name} setName={setName} formHandler={formHandler} />
        </div>
    )
}
export default CreateAuthor;