import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./app/home";
import GetStarted from "./app/get-started";
import TestButton from "./Buttons/Button";

function App() {
  return (
    <div className="w-screen h-screen text-primary-text">
       <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path={'get-started'} element={<GetStarted />} />
            <Route path="/button" element={<TestButton />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
