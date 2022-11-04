// import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import Users from "./pages/users/Users";
import Profile from "./pages/profile/Profile";
// import Data from "./pages/data/Data";
import New from "./pages/new/New";
import Talk from "./pages/talk/Talk";
import Form from "./pages/form/Form";
import Chart from "./components/chart/Chart";

import "./style/dark.scss";
import { userInputs } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { useUserAuth } from "./context/UserAuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import "./style/style.scss";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  // const RequireAuth = ({ children}) => {
  //   const { user } = useUserAuth();
  //   console.log("Check user in Private: ", user);
  //   if (!user) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Talk/>
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                   <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <New title="Add New Report" />
                </ProtectedRoute>
              }
            />
            <Route
              path="talk"
            element={
              <ProtectedRoute>
                <Talk/>
              </ProtectedRoute>
            }
          />
            <Route
              path="pedometer"
            element={
              <ProtectedRoute>
                 <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
              </ProtectedRoute>
            }
          />
           <Route
              path="form"
              element={
                <ProtectedRoute>
                  <Form inputs={userInputs} />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
