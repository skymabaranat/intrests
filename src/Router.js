import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ariana from "./APage";
import Harkiran from "./HPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="ariana" element={<Ariana />} />
          <Route path="harkiran" element={<Harkiran />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);