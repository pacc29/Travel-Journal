import React from "react";
import Header from "./Components/header";
import Sites from "./Components/sites";
import Data from "./data";

export default function App() {
  let parseSites = Data.map((site) => {
    return <Sites id={site.id} {...site} />;
  });

  return (
    <div className="top-wrapper">
      <Header />
      <section className="sites-section">{parseSites}</section>
      <hr className="split-line"></hr>
    </div>
  );
}
