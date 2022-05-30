import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import Courses from "./components/Courses";
import Singlecard from "./components/Singlecard";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/react-task-7" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sidebar" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<Courses />} />
          </Route>
          <Route path="/cards/:id" element={<Singlecard />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
