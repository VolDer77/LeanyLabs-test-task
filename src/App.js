import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="section-inner">
        <section className="section-content">
          <div className="section-content__wrapper">
            <Header />
            <Form />
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
