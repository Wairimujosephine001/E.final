import { Routes, Route } from "react-router-dom";
import HomePage from './Components/pages/HomePage';
import Signin from './Components/pages/Signin';
import Signup from './Components/pages/Signup';

function App() {
  return (
      <div className='container w-full mx-auto bg-edify-gray h-screen'>
      <Signin/>
      <Signup/>
      <HomePage/>
      </div>
    
  );
}

export default App;

// <Routes>
// <Route path="/" element={<Signup />}>
//   <Route path="/signup" element={<Signup />} />
//   <Route path="/signin" element={<Signin />} />
//   <Route path="/homepage" element={<HomePage />} />
// </Route>
// </Routes>