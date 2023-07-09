import "./style.css";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <CustomLink to="/">홈</CustomLink>
        <CustomLink to="/search">검색</CustomLink>
        <CustomLink to="/signIn">로그인</CustomLink>
        <CustomLink to="/myPage">마이페이지</CustomLink>
        <CustomLink to="/setting">설정</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : " "}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
