import { useState } from "react";
import styles from "./formInput.module.css";

export default function FormInput(props) {
  const [focused, setFoucsed] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFoucsed(true);
  };

  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      {/*<label>Username</label>*/}
      <input
        className={styles.InputItem}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFoucsed(true)
        }
        focused={focused.toString()}
        autoComplete="off"
      />
      <span className={styles.Message}>{errorMessage}</span>
    </div>
  );
}
