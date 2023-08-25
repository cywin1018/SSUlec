import styles from "./cssPage/PasswordChange.module.css";
import { useState } from "react";
// import { auth } from "../firebase";
import { getAuth, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function PasswordChange() {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const onSetNewPass = async (e) => {
    e.preventDefault();
    if (newPass !== confirmPass) {
      console.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    const auth = getAuth();
    const user = auth.currentUser;

    try {
      await updatePassword(user, newPass).then(() => {
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

        <div className={styles.formOuter}>
          <form>
            <input
              className={styles.password}
              type="text"
              placeholder="비밀번호 입력"
              onChange={(e) => setNewPass(e.target.value)}
            />
            <input
              className={styles.passConfirm}
              type="password"
              placeholder="비밀번호 확인"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </form>
          <button className={styles.confirmBtn} onClick={onSetNewPass}>
            confirm
          </button>
        </div>
      </div>
    </>
  );
}
export default PasswordChange;
