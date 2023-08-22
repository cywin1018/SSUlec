import { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const onSetNewPass = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setEmailSent(true);
    } catch (error) {
      console.error("비밀번호 초기화 오류:", error);
    }
  };

  return (
    <div>
      {emailSent ? (
        <p>이메일을 확인하여 비밀번호 재설정 링크를 찾아보세요.</p>
      ) : (
        <div>
          <input
            type="email"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={onSetNewPass}>비밀번호 초기화</button>
        </div>
      )}
    </div>
  );
}
