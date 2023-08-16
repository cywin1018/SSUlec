import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logout = () => {
    // 로그아웃 처리: 상태 초기화 및 로컬 스토리지에서 로그인 정보 제거
    setUser({ email: "" });
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  const contextValue = { user, setUser, isLoggedIn, setIsLoggedIn, logout };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
