import styles from "./cssPage/NewPassword.module.css";
import { useState } from "react";
import { auth } from "../firebase";
import { updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function PasswordChange() {
  const [newPass, setNewPass] = useState("");
  const navigate = useNavigate();
  const onSetNewPass = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(auth.currentUser, newPass).then(() => {
        console.log("비밀번호 변경 성공");
        navigate("/");
      });
    } catch (error) {
      console.error("비밀번호 변경 오류:", error);
    }
  };

  return (
    <>
      <div className={styles.Outer}>
        <h1 className={styles.title}>SSULEC</h1>
        <h2 className={styles.passTitle}>비밀번호 재설정</h2>

        <form>
          <input
            className={styles.password}
            type="password"
            placeholder="비밀번호 입력"
            onChange={(e) => setNewPass(e.target.value)}
          />
          <input
            className={styles.passConfirm}
            type="password"
            placeholder="비밀번호 확인"
          />
        </form>
        <button className={styles.send} onClick={onSetNewPass}>
          confirm
        </button>
      </div>
    </>
  );
}
