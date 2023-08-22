const GoogleLogoutButton = () => {
  const tmp = () => {
    console.log("로그아웃버튼실행!");
  };
  return (
    <div>
      <button onClick={tmp}>구글 로그아웃</button>
    </div>
  );
};

export default GoogleLogoutButton;
