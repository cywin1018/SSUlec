import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GiExitDoor } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { BsGear } from "react-icons/bs";
import "./Nav.css";
export default function Nav() {
  return (
    <nav className="navigation">
      <ul>
        <li className="list">
          <MdOutlineHome size="32px" />
          <span className="text">홈</span>
        </li>
        <li className="list">
          <FiSearch size="32px" />
          <span className="text">검색</span>
        </li>
        <li className="list">
          <GiExitDoor size="32px" />
          <span className="text">로그인</span>
        </li>
        <li className="list">
          <CgProfile size="32px" />
          <span className="text">마이페이지</span>
        </li>
        <li className="list">
          <BsGear size="32px" />
          <span className="text">설정</span>
        </li>
      </ul>
    </nav>
  );
}
