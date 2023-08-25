import { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "./cssPage/NewPassword.module.css";

export default function NewPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const onSetNewPass = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setEmailSent(true);
    } catch (error) {
      console.error("비밀번호 초기화 오류:", error);
    }
  };

  const onReturnHome = () => {
    navigate("/");
  };
  const onAlert = () => {
    setShowAlert(true);
  };
  return (
    <div className={styles.Outer}>
      <div>
        <h1 className={styles.title}>비밀번호 초기화</h1>
        <p className={styles.message}>
          이메일을 확인하여 <br />
          비밀번호 재설정 링크를 찾아보세요.
        </p>
        <form className={styles.inputForm}>
          <input
            type="email"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={onSetNewPass}>보내기</button>
        </form>
        <div className={styles.backHomeBtn}>
          {emailSent ? (
            <button onClick={onReturnHome} className={styles.activeBtn}>
              Home으로 돌아가기
            </button>
          ) : (
            <button onClick={onAlert}>Home으로 돌아가기</button>
          )}
        </div>
        {showAlert && (
          <div className={styles.alertOuter}>
            <div className={styles.alertMessage}>
              비밀번호 재설정 후 클릭이 가능합니다
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
