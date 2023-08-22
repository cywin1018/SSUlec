import { useState } from "react";
import styles from "./cssPage/FindId.module.css";
import { auth } from "../firebase";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function FindId() {
  const [email, setEmail] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const navigate = useNavigate();

  const handleSendVerification = async (e) => {
    e.preventDefault();
    try {
      await sendEmailVerification(auth.currentUser);
      setVerificationSent(true);
      console.log("인증 이메일 전송 완료");
    } catch (error) {
      console.error("이메일 인증번호 전송 에러:", error);
    }
  };

  const nextButton = (e) => {
    e.preventDefault();
    if (verificationSent) {
      navigate("/NewPassword");
    } else {
      console.log("fef");
      window.alert("이메일 인증을 하세요");
    }
  };

  return (
    <>
      <div className={styles.Outer}>
        <h1 className={styles.title}>비밀번호 찾기</h1>
        <h2 className={styles.idTitle}>이메일 인증</h2>

        <form className={styles.buttonWith1}>
          <input
            className={styles.InputId}
            placeholder="이메일 주소를 입력하세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={styles.send}
            onClick={handleSendVerification}
            disabled={verificationSent}
          >
            이메일 인증
          </button>
        </form>

        <form className={styles.nxtBtnForm}>
          <button
            className={styles.nextButton}
            onClick={nextButton}
            disabled={!verificationSent}
          >
            다음
          </button>
        </form>
      </div>
    </>
  );
}
