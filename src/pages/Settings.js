import styles from "./cssPage/Setting.module.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Components/UserContext";
import { Link } from "react-router-dom";
export default function Settings({ onLogin }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    onLogin(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };
  return (
    <>
      <div className={styles.Outer}>
        <div className={styles.content}>
          <h1 className={styles.title}>설정</h1>
          <div className={styles.optionList}>
            <ul>
              <li>UserID</li>
              <li>E-mail</li>
              <li>
                <Link to="/PasswordChange" className={styles.Change}>
                  비밀번호 변경
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>로그아웃</button>
              </li>
              <li>고객지원</li>
              <li>버전</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
