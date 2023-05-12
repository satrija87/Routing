import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";
import { Page4 } from "./pages/Page4";
import { Page5 } from "./pages/Page5";

function App() {
  return (
    <>
      <div
        className="bg-emerald-100 px-2 py-2 text-center"
      >
        <Link to="Page1">
          <button className=" py-2 px-2">1</button>
        </Link>
        <Link to="Page2">
          <button className=" py-2 px-2">2</button>
        </Link>
        <Link to="Page3">
          <button className=" py-2 px-2">3</button>
        </Link>
        <Link to="Page4">
          <button className=" py-2 px-2">4</button>
        </Link>
        <Link to="Page5">
          <button className=" py-2 px-2">5</button>
        </Link>
      </div>

      <Routes>
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Page5" element={<Page5 />} />
      </Routes>
    </>
  );
}

export default App;
