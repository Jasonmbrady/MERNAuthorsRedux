import React from 'react';
import { navigate } from '@reach/router';

const Form = ({ name, setName, formHandler }) => {

    return (
        <form onSubmit={formHandler}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="button" onClick={(e) => { navigate("/") }} >Cancel</button>
            <button type="submit">Submit</button>
        </form>

    )
}
export default Form;