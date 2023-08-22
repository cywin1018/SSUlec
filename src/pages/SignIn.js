import { useState } from "react";
import styles from "./cssPage/SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import UseFetch from "../Components/UseFetch";
import { useUserContext } from "../Components/UserContext";
// ==================== firebase import =================
import { auth, googleProvider } from "../firebase";

import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
// =====================================================
export default function SignIn({ onLogin }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  // const login = UseFetch(`http://10.14.4.187:8080/user`);
  // const { setUser } = useUserContext();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("ok");
  //   axios
  //     .get("http://10.14.4.187:8080/user")
  //     .then((res) => {
  //       // let flag = false;
  //       // for (let log of res.data._embedded.userList) {
  //       //   if (log.email === Email && log.password === Password) {
  //       //     window.alert("로그인성공!");
  //       //     flag = true;
  //       //     localStorage.setItem("isLoggedIn", true);
  //       //     onLogin(true);
  //       //     setUser({ email: Email });
  //       //     navigate("/");
  //       //   }
  //       //   if (flag === false) {
  //       //     window.alert("로그인실패!");
  //       //   }
  //       // }
  //     })
  //     .catch((error) => {
  //       console.error("에러 발생:", error);
  //     });
  // };

  // ==================== firebase code=================
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, Email, Password);
      onLogin(true);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.Outer}>
        <section className={styles.BodyControl}>
          <h1 className={styles.title}>로그인</h1>
          <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <label className={styles.laTitle} htmlFor="text">
              Email
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
            <h1 className={styles.Or}>또는</h1>
            <button className={styles.Login} onClick={signInWithGoogle}>
              Google계정으로 로그인
            </button>
          </form>
          <div>
            <ul className={styles.find}>
              <li id="pwSearch">
                <p>비밀번호를 잊어버렸나요?</p>
                <Link to="/FindId" className={styles.pwSearch}>
                  비밀번호 재설정
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
