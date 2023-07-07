import { Link } from "react-router-dom";

export default function Logo() {
  const styleH1 = {
    paddingTop: "1rem",
    paddingLeft: "2rem",
    fontSize: "32px",
    innerWidth: "340px",
    innerHeight: "70px",
    outLine: "none",
  };
  return (
    <>
      <Link to="/">
        <h1 style={styleH1}>Ssulec</h1>
      </Link>
    </>
  );
}
