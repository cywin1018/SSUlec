import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./Components/Logo.js";
import Nav from "./Components/Nav.js";
import Tabs from "./Components/Tabs.js";
export default function App() {
  return (
    <>
      <section>
        <Router>
          <Routes>
            <Route path="/" element={<Logo />} />
          </Routes>
        </Router>
        <Tabs />
        <Nav />
      </section>
    </>
  );
}
