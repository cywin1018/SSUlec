import { useState } from "react";
import "./cssPage/SignUp";
import FormInput from "./Components/FormInput";
import Navbar from "./Components/Nav";
import { FcGoogle } from "react-icons/fc";
export default function SignUp() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "아이디는 3-10자리 영어,숫자 혼합입니다.",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,10}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "올바르지 않은 이메일 양식 입니다.",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "비밀번호는 4-16자리 영어,숫자,특수문자 혼합입니다.",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "ConfirmPassword",
      errorMessage: "일치하지 않습니다. 비밀번호를 다시 확인해주세요.",
      label: "ConfirmPassword",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // console.log(values);
  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1 className="title">회원가입</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="sign">회원가입</button>
          <h1>또는</h1>
          <button className="google-sign">
            <FcGoogle size="32px" />
            <text>구글계정으로 회원가입</text>
          </button>
        </form>
        <Navbar />
      </div>
    </>
  );
}
