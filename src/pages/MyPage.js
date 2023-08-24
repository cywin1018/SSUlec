import styles from "./cssPage/MyPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsBookmarksFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper";
import { useState, useEffect } from "react";
// import UseFetch from "../Components/UseFetch";
// import axios from "axios";
// import { createContext, useContext } from "react";
import { useUserContext } from "../Components/UserContext";
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export default function MyPage() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [wordList, setWordList] = useState([]);
  const [emailData, setEmailData] = useState("");
  const [nicknameData, setNicknameData] = useState("");

  // const words = UseFetch(`http://localhost:8080/words`);
  // axios
  //   .get("http://localhost:8080/words/")
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("에러 발생:", error);
  //   });
  const addWordBtn = () => {
    navigate("/addWord");
  };
  useEffect(() => {
    const fetchWordData = async () => {
      try {
        const emailQ = query(collection(db, "personalData"));
        const dataEmail = await getDocs(emailQ);
        const emailFieldValue =
          dataEmail.docs[0]._document.data.value.mapValue.fields.Email;
        setEmailData(emailFieldValue.stringValue);

        const dataNickname = await getDocs(emailQ);
        const nicknameFiledValue =
          dataNickname.docs[0]._document.data.value.mapValue.fields.Nickname;
        setNicknameData(nicknameFiledValue.stringValue);

        const q = query(collection(db, "wordData"));
        const data = await getDocs(q);

        const newData = data.docs.map((doc) => ({
          ...doc.data(),
        }));
        setWordList(newData);
        // const querySnapshot = await getDocs(collection(db, "ssulec"));
        // console.log(querySnapshot);
        // for (let query of querySnapshot) {
        //   console.log(query);
        // }
        // querySnapshot.forEach((doc) => {
        //   const data = doc.data();
        //   console.log(data);
        //   if (data.wordData && data.wordData.word) {
        //     words.push(data.wordData.word);
        //   }
        // });
        // setWordList(words);
      } catch (err) {
        console.error("Error fetching word data:", err);
      }
    };

    fetchWordData();
  }, []);
  return (
    <>
      <div className={styles.Outer}>
        <h1 className={styles.title}>Ssulec</h1>
        <p className={styles.profile}>
          <p className={styles.emailData}>{`Email : ${emailData}`}</p>
          <p className={styles.nicknameData}>{`닉네임 : ${nicknameData}`}</p>
        </p>
        <div className={styles.bookMark}>
          <h3>
            <BsBookmarksFill /> 북마크
          </h3>
          <div>
            <p>북마크 1</p>
            <p>북마크 2</p>
            <p>북마크 3</p>
          </div>
        </div>
        <div className={styles.myWord}>
          <h3>내가 만든 단어장</h3>
          <div className="SwiperOuter">
            <Swiper pagination={true}>
              {wordList.map((word, index) => (
                <SwiperSlide key={word.id}>
                  <div className={styles.wordBox}>
                    <div className={styles.words}>{word.word}</div>
                    <div className={styles.means}>{word.kor}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className={styles.addBtn} onClick={addWordBtn}>
              단어추가
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
