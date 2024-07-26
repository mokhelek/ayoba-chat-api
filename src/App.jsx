import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import ChatApp from "./components/pages/DoodlePage";


function App() {

  return (
    <>
      <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/doodle" element={<ChatApp />} />
      </Routes>
    </>
  )
}

export default App
