import React, { useState, useEffect } from 'react';
import { Link, navigate } from "@reach/router";
import Form from '../components/Form';
import axios from "axios";

const UpdateAuthor = ({ id, authors, setAuthors }) => {

    const [name, setName] = useState("");
    const [author, setAuthor] = useState({ name: "" });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data);
                setName(res.data.name);
            })
            .catch(err => console.log(err));
    }, [id]);

    const updateAuthors = (id, changedAuthor) => {
        let idx = 0;
        for (let i = 0; i < authors.length; i++) {
            if (authors[i]._id === id) {
                idx = i;
            }
        }
        let tempAuthors = [...authors];
        tempAuthors[idx] = changedAuthor;
        setAuthors(tempAuthors);
    }

    const formHandler = (e) => {
        e.preventDefault();
        let changedAuthor = { name: name }
        axios.put(`http://localhost:8000/api/authors/${author._id}`, changedAuthor)
            .then(res => updateAuthors(author._id, res.data))
            .catch(err => console.log(err));
        navigate("/");

    }

    return (
        <div>
            <Link to="/">Home</Link>
            <p>Update Author:</p>
            <Form name={name} setName={setName} formHandler={formHandler} />
        </div>
    )
}
export default UpdateAuthor;