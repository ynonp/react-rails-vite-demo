import React from "react";
import useSWR from 'swr';
import { createRoot } from 'react-dom/client';
import Homepage from "../routes/homepage";
import About from '../routes/about';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  useLocation,
  useHref,
} from "react-router-dom";

const fetcher = async (url) => {
  const pageData = document.querySelector(`#page-data[data-url="${url}"]`);
  if (pageData) {
    console.log(`Reading data from page`);
    return JSON.parse(pageData.innerHTML);
  } else {
    const res = await fetch(url, { headers: { accept: 'application/json' } })
    return await res.json();
  }
}

function Layout() {
  const location = useLocation();
  const url = useHref(location);
  const { data, error } = useSWR(url, fetcher)

  if (error) {
    console.log(error);
    return <p>Error: {JSON.stringify(error)}</p>
  }

  return (
    <div>
      <h1>My App</h1>
      <p>Visiting: {url}</p>
      {data && <Outlet context={data} />}
    </div>
  );
}

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about/index" element={<About />} />
          </Route>
        </Routes>
    </Router>
  );
}

const root = createRoot(document.querySelector('#app'));
root.render(<App />);
