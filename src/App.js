import { useState, useEffect } from "react";
import BottomNav from "./Components/BottomNav";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import FindId from "./pages/FindId";
import FindInputId from "./pages/FindInputId";
import { Mobile, PC } from "./Components/MediaQuery";
import { Routes, Route } from "react-router-dom";
import styles from "./style.module.css";
import NewPassword from "./pages/NewPassword";
import AddWord from "./pages/AddWord";
import MyPage from "./pages/MyPage";
import BottomNavLog from "./Components/BottomNavLog";
import { UserProvider } from "./Components/UserContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태 확인
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogin = (loginStatus) => {
    setIsLoggedIn(loginStatus);
  };

  return (
    <UserProvider>
      <PC>
        <div className={styles.AppOuter}>
          <div className={styles.AppContent}>
            {console.log(isLoggedIn)};
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
              <Route path="/FindInputId" element={<FindInputId />} />
              <Route path="/NewPassword" element={<NewPassword />} />
              <Route path="/MyPage" element={<MyPage />} />
            </Routes>
          </div>
        </div>
      </PC>
      <Mobile>
        <div className="App">
          <BottomNav />
          <Routes>
            <Route path="/" Component={Main} />
            <Route path="/search" Component={Search} />
            <Route path="/signIn" Component={SignIn} />
            <Route path="/signUp" Component={SignUp} />
            <Route path="/settings" Component={Settings} />
          </Routes>
        </div>
      </Mobile>
    </UserProvider>
  );
}
