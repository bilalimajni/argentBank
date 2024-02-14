import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import SingIn from "./page/singIn";
import Index from "./page/index";
import User from "./page/user";

function App() {
  return (
    <BrowserRouter>
    
     
    <Routes>
    <Route path="/" element={<Index/>} />
        <Route path="/SingIn" element={<SingIn/>} />
        <Route path="/User" element={<User/>} />
        
    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
