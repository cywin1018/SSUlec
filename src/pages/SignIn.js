import { useState } from "react";
import styles from "./cssPage/SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleLoginButton from "../Components/GoogleLoginButton";
import UseFetch from "../Components/UseFetch";
import { useUserContext } from "../Components/UserContext";

export default function SignIn({ onLogin }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = UseFetch(`http://localhost:3030/users/`);
  const { setUser } = useUserContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3030/users/")
      .then(() => {
        let flag = false;
        for (let log of login) {
          // console.log(log);
          // console.log(Email, Password, "입니다");
          if (log.user_id === Email && log.user_password === Password) {
            window.alert("로그인성공!");
            flag = true;
            localStorage.setItem("isLoggedIn", true);
            onLogin(true);
            setUser({ email: Email });
            navigate("/");
          }
        }
        if (flag === false) {
          window.alert("로그인실패!");
        }
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  };

  return (
    <>
      <div className={styles.Outer}>
        <section className={styles.BodyControl}>
          <h1 className={styles.title}>로그인</h1>
          <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <label className={styles.laTitle} htmlFor="text">
              Username
            </label>
            <input
              className={styles.UserInput}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={styles.laTitle} htmlFor="password">
              Password
            </label>
            <input
              className={styles.UserInput}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={styles.wrapSave}>
              <input type="checkbox" id="checkId" name="checkId" />
              <label htmlFor="checkId"> 아이디 저장</label>
            </span>
            <button className={styles.Login}>로그인</button>
            <h3 className={styles.Or}>또는</h3>

            <button className={styles.googleBtn}>
              <GoogleLoginButton />
            </button>
          </form>
          <div>
            <ul className={styles.find}>
              <li id="idSearch">
                <Link to="/FindId" className={styles.idSearch}>
                  아이디 찾기
                </Link>
              </li>

              <li id="pwSearch">
                <Link to="/FindInputId" className={styles.pwSearch}>
                  비밀번호 찾기
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
