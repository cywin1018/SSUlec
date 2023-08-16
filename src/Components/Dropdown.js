export default function Dropdown({
  value,
  setWordIdentify,
  setIsOpen,
  isOpen,
}) {
  const ValueClick = () => {
    setWordIdentify(value);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <li
        style={{
          listStyle: "none",
          fontSize: "0.7em",
          marginLeft: "71%",
          boxSizing: "border-box",
        }}
        onClick={ValueClick}
      >
        {value}
      </li>
    </>
  );
}
