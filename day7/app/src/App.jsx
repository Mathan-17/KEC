import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListUser from "./component/ListUser";
import Home from "./component/home";
import ListUser from './component/ListUser.jsx';
function App() {
  return (
    <ListUser/>)}
export default App;

function App()
{
  return(
    <>
    
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ListUser" element={<ListUser />}></Route>
          {/* <Route path="/about" element={<about />}></Route> */}
        </Routes>
    </>
  )
}

export default App;