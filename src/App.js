import logo from './logo.svg';
import './App.css';
import Task5 from './components/Task5';
import Json from './components/Json';
import FetchData from './components/FetchData';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
     
      {/* <Task5></Task5> */}
      <Json></Json>
      <FetchData></FetchData>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
