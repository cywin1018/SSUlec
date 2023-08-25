import { useState, useEffect } from "react";
import BottomNav from "./Components/BottomNav";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import FindId from "./pages/FindId";
import BeforeLog from "./pages/BeforeLog";
import { Mobile, PC } from "./Components/MediaQuery";
import { Routes, Route } from "react-router-dom";
import styles from "./style.module.css";
import NewPassword from "./pages/NewPassword";
import AddWord from "./pages/AddWord";
import MyPage from "./pages/MyPage";
import BottomNavLog from "./Components/BottomNavLog";
import { UserProvider } from "./Components/UserContext";
import PasswordChange from "./pages/PasswordChange";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태 확인
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn === "true") {
      console.log("로그인 유지중");
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogin = (loginStatus) => {
    setIsLoggedIn(loginStatus);
  };

  return (
    <UserProvider>
      <PC className={styles.pcOuter}>
        <div className={styles.AppOuter}>
          <div className={styles.AppContent}>
            {console.log(isLoggedIn)}
            {isLoggedIn ? <BottomNavLog /> : <BottomNav />}
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/signIn"
                element={<SignIn onLogin={handleLogin} />}
              />
              <Route path="/signUp" element={<SignUp />} />
              <Route
                path="/settings"
                element={<Settings onLogin={handleLogin} />}
              />
              <Route path="/FindId" element={<FindId />} />
              <Route path="/addWord" element={<AddWord />} />

              <Route path="/NewPassword" element={<NewPassword />} />
              <Route path="/MyPage" element={<MyPage />} />
              <Route path="/BeforeLog" element={<BeforeLog />} />
              <Route path="/PasswordChange" element={<PasswordChange />} />
            </Routes>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className={styles.AppOuter}>
          <div className={styles.AppContent}>
            {console.log(isLoggedIn)}
            {isLoggedIn ? <BottomNavLog /> : <BottomNav />}
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/signIn"
                element={<SignIn onLogin={handleLogin} />}
              />
              <Route path="/signUp" element={<SignUp />} />
              <Route
                path="/settings"
                element={<Settings onLogin={handleLogin} />}
              />
              <Route path="/FindId" element={<FindId />} />
              <Route path="/addWord" element={<AddWord />} />

              <Route path="/NewPassword" element={<NewPassword />} />
              <Route path="/MyPage" element={<MyPage />} />
              <Route path="/BeforeLog" element={<BeforeLog />} />
              <Route path="/PasswordChange" element={<PasswordChange />} />
            </Routes>
          </div>
        </div>
      </Mobile>
    </UserProvider>
  );
}
