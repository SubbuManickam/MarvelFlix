import { useContext } from "react";
import "./app.scss"
import Home from "./home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthContext } from "./components/context/authContext/AuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Coming from "./pages/comingsoon/Coming";
import MyList from "./pages/mylist/MyList";

const App = () => {
  const {user} = useContext(AuthContext);
  
  return (
    <Router>
      <ToastContainer position='top-center' autoClose={2000} hideProgressBar= {false} closeOnClick= {true} pauseOnHover= {true} draggable= {true} theme= "colored"/>
      <Routes>
        <Route exact path="/" element={user ? <Home/> : <Register/>}/>
        <Route path="/register" element={!user ? <Register/> : <Home/>}/>
        <Route path="/login" element={!user ? <Login/> : <Home/>}/>
        {
          user && (
            <>
              <Route path="/movies" element={<Home type="movies"/>}/>
              <Route path="/series" element={<Home type="series"/>}/>
              <Route path="/coming" element={<Coming />}/>
              <Route path="/mylist" element={<MyList />}/>
              <Route path="/watch" element={<Watch/>}/>
            </>
          )
        }
      </Routes>
    </Router>
  );
};

export default App;