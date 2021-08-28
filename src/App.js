import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { LocationInfo } from "./components/LocationInfo";

import "./App.css";
import { getSortedParams } from "./utils";

function App() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const getGeolocation = async (ip) => {
    setLoading(true);
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    const sortedData = getSortedParams(data);
    setLocation(sortedData);
    setLoading(false);
  };

  return (
    <div className="app">
      <section className="section-inner">
        <section className="section-content">
          <div className="section-content__wrapper">
            <Header />
            <Form getGeolocation={getGeolocation} />
            <LocationInfo
              location={location}
              loading={loading}
              error={location?.error || false}
            />
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
