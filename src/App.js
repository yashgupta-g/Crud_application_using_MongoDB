import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import CrudApp from './components/CrudApp';
import "./components/Header"
import Header from './components/Header';
import {BrowserRouter, Routes ,Route  } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/"     element={  <CrudApp />}/>
      <Route path="/all"  element={  <AllUser />}/>       
      <Route path="/add"  element={  <AddUser />}/>     
       </Routes>
    </BrowserRouter>
  );
}

export default App;
