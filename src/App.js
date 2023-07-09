import Navbar from "./Navbar";
import Main from "./pages/Main";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import Setting from "./pages/Settings";
import { Route, Routes } from "react-router-dom";
import Logo from "./Components/Logo";
import Tabs from "./Components/Tabs";
export default function App() {
  return (
    <>
      <div className="container">
        <Logo />
        <Tabs />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/myPage" element={<Main />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        <Navbar />
      </div>
    </>
  );
}
