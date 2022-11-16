import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Buttons from './Components/common/Buttons';
import Inputs from './Components/common/Inputs';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div>
   <Signin />
   <Signup/>
   <Sidebar/>
    </div>  
  );
}

export default App;
