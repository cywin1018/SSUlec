import styles from "./cssPage/BeforeLog.module.css";

const BeforeLog = () => {
  return (
    <div className={styles.Outer}>
      <div>
        <h1 className={styles.title}>로그인을 하셨나요?</h1>
        <p className={styles.message}>
          로그인이 필요한 작업입니다
          <br />
          로그인 페이지로 돌아가 로그인 해주세요
        </p>
      </div>
    </div>
  );
};

export default BeforeLog;
