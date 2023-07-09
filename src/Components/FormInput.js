import { useState } from "react";
import "./formInput.css";

export default function FormInput(props) {
  const [focused, setFoucsed] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFoucsed(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {/*<label>Username</label>*/}
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFoucsed(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}
