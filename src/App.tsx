import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GetStarted from "./app/get-started";
import TestButton from "./Buttons/Button";
import SideMenu from "./menu";

function App() {
  return (
    <div className="w-screen h-screen text-primary-text">
      <div className="bg-red-200 w-full h-full flex bg-secondary">
        <BrowserRouter>
          <SideMenu />
          <div className={"max-w-[800px] mx-auto flex flex-col h-full"}>
            <Routes>
              <Route index path={"get-started"} element={<GetStarted />} />
              <Route path="/button" element={<TestButton />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
