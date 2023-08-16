import styles from "./cssPage/MyPage.module.css";
import UseFetch from "../Components/UseFetch";
import axios from "axios";
import { createContext, useContext } from "react";
import { useUserContext } from "../Components/UserContext";

export default function MyPage() {
  const { user } = useUserContext();

  // const words = UseFetch(`http://localhost:8080/words`);
  // axios
  //   .get("http://localhost:8080/words/")
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("에러 발생:", error);
  //   });

  return (
    <>
      <div className={styles.Outer}>
        <h1 className={styles.title}>Ssulec</h1>
        <p className={styles.profile}>이메일 출력 공간{user.email}</p>
        <div className={styles.bookMark}>북마크 공간</div>
        <div className={styles.myWord}>
          <h3>내가 만든 단어장</h3>
          {/* <ul>
            {words.map((word) => (
              <li key={word.id}>
                {word.word} - {word.kor}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
}
