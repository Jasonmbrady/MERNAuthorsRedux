import React from 'react';
import { Link, navigate } from "@reach/router";

const ShowAll = ({ authors, deleteHandler }) => {

    return (
        <div>
            <Link to="/create">Add an Author!</Link>
            <p>We have quotes by:</p>
            <table style={{ margin: "auto", border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, idx) => {
                            return (
                                <tr key={idx} style={{ border: "1px solid black" }}>
                                    <td>
                                        {author.name}
                                    </td>
                                    <td>
                                        <button
                                            onClick={(e) => { navigate(`/update/${author._id}`) }}>
                                            Edit
                                        </button>
                                        <button
                                            onClick={(e) => { deleteHandler(author._id) }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ShowAll;