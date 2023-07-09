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
          <a href="/">
            <MdOutlineHome size="32px" />
            <span className="text">홈</span>
          </a>
        </li>
        <li className="list">
          <a href="/">
            <FiSearch size="32px" />
            <span className="text">검색</span>
          </a>
        </li>
        <li className="list">
          <a href="/">
            <GiExitDoor size="32px" />
            <span className="text">로그인</span>
          </a>
        </li>
        <li className="list">
          <a>
            <CgProfile size="32px" />
            <span className="text">마이페이지</span>
          </a>
        </li>
        <li className="list">
          <a>
            <BsGear size="32px" />
            <span className="text">설정</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
