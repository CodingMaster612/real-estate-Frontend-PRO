import './App.css';
import SignIn from "./components/pages/signIn.js";
import Home from "./components/pages/Home.js";
import SignUp from "./components/pages/signUp.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
