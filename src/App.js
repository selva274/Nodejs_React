
import './App.css';
import Axios from 'axios';
let data;

function App() {
  const handleClick =async ()=>{
    try {
      data= await Axios.get("http://localhost:3000/api/employee/");   
      
    } catch (error) {
      console.log(error);
    }  
     console.log(data);
    
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click to fetch</button>

    </div>
  );
}

export default App;
