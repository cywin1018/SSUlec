import { useState } from "react";
import "./Tabs.css";

export default function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          스페인어
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          프랑스어
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          독일어
        </button>
      </div>
      <div className="content-tabs">
        <div className="content-1">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <h2>기초</h2>
            <hr />
            <span className="content-boxs">
              <p>공간1</p>
              <p>공간2</p>
              <p>공간3</p>
            </span>
          </div>
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <h2>중급</h2>
            <hr />
            <span className="content-boxs">
              <p>공간1</p>
              <p>공간2</p>
              <p>공간3</p>
            </span>
            <span className="content-boxs">
              <p>공간1</p>
              <p>공간2</p>
              <p>공간3</p>
            </span>
          </div>
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <h2>고급</h2>
            <hr />
            <span className="content-boxs">
              <p>공간1</p>
              <p>공간2</p>
              <p>공간3</p>
            </span>
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>기초</h2>
          <hr />
          <p>기초 프랑스어 API</p>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>기초</h2>
          <hr />
          <p>기초 독일어 API</p>
        </div>
      </div>
    </div>
  );
}
