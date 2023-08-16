import { MdOutlineHome } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
export default function BottomNavLog() {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="BottomNavWrapper">
      <div>
        <Link to="/" onClick={() => setActiveNav(1)}>
          <MdOutlineHome
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
        </Link>
      </div>
      <div>
        <Link to="/search" onClick={() => setActiveNav(2)}>
          <FiSearch
            className={activeNav === 2 ? "nav-item active" : "nav-item"}
          />
        </Link>
      </div>
      <div>
        <Link
          to="/addWord"
          className="nav-link"
          onClick={() => setActiveNav(3)}
        >
          <AiOutlinePlusCircle
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
        </Link>
      </div>
      <div>
        <Link to="/mypage" className="nav-link" onClick={() => setActiveNav(4)}>
          <CgProfile
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
        </Link>
      </div>
      <div>
        <Link
          to="/settings"
          className="nav-link"
          onClick={() => setActiveNav(5)}
        >
          <BsGear
            className={activeNav === 5 ? "nav-item active" : "nav-item"}
          />
        </Link>
      </div>
    </nav>
  );
}
