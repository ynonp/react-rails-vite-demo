import React from 'react';

import { Link, useOutletContext } from "react-router-dom";

export default function About() {
  const { page } = useOutletContext();
  return (
    <div>
      <h2>Page Name From Rails: {page}</h2>
      <Link to="/">Back Home</Link> 
    </div>
  );
}
