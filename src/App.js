import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import CrudApp from './components/CrudApp';
import "./components/Header"
import Header from './components/Header';
function App() {
  return (
    <div className="App">
<Header/>
<CrudApp/>
<AddUser/>
<AllUser/>
    </div>
  );
}

export default App;
