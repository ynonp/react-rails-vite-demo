import React, { useState } from 'react';
import { Link, useOutletContext } from "react-router-dom";

export default function Homepage() {
  const [name, setName] = useState('');
  const { page } = useOutletContext();

  return (
    <div>
      <h2>Page Name From Rails: {page}</h2>
      <label>
        Please type your name:
        <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} />
      </label>
      {name !== '' && <p>Hello! {name}</p>}
      <Link to="/about/index">About Us</Link> 

    </div>
  );
}

