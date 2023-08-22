import { useState } from "react";
// import axios from "axios";
import styles from "./cssPage/SignUp.module.css";
import FormInput from "../Components/FormInput";
import { useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// ==================== firebase import =================
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
// =====================================================
export default function SignUp() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "올바르지 않은 이메일 양식 입니다.",
      label: "Email",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "비밀번호는 4-16자리 영어,숫자,특수문자 혼합입니다.",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}",
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "ConfirmPassword",
      errorMessage: "일치하지 않습니다. 비밀번호를 다시 확인해주세요.",
      label: "ConfirmPassword",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: "nickname",
      type: "text",
      placeholder: "nickname",
      errorMessage: "중복된 닉네임 입니다.",
      label: "nickname",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // =============================== firebase ========================================
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      const registerNickname = {
        Email: values.email,
        Nickname: values.nickname,
      };
      const docRef = doc(db, "personalData", values.nickname);
      await setDoc(docRef, registerNickname);
      console.log("데이터 추가 완료", registerNickname);
    } catch (err) {
      console.log(err);
    }
    // =============================== firebase ========================================
    // axios.defaults.baseURL = "https://10.14.4.187:8080"; //스프링부트 연결용

    // axios
    //   .post(
    //     "http://10.14.4.187:8080/user",
    //     {
    //       email: values.email,
    //       password: values.password,
    //       name: "최용원",
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     if (res.status >= 200 && res.status < 300) {
    //       window.alert("회원가입완료!");
    //       navigate("/");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("에러 발생:", error);
    //   });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className={styles.app}>
        <form>
          <h1 className={styles.title}>회원가입</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className={styles.sign} onClick={handleSubmit}>
            다음
          </button>
        </form>
      </div>
    </>
  );
}
