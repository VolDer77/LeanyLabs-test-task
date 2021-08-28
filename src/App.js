import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="app">
      <section className="section-inner">
        <section className="section-content">
          <div className="section-content__wrapper">
            <Header />
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
