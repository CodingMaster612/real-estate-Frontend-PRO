import './App.css';
import SignIn from "./components/pages/signIn.js";
import Home from "./components/pages/Home.js";
import SignUp from "./components/pages/signUp.js";
import AddProperty from "./components/pages/addProperty.js";
import ViewProperty from "./components/pages/ViewProperty";
import DeleteProperty from './components/pages/deleteProperty';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path ="/addProperty" element={<AddProperty />} />
          <Route path="/viewProperty" element={<ViewProperty />} />
          <Route path="/deleteProperty" element={<DeleteProperty/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
