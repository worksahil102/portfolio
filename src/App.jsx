import Index from "./pages/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import bgImage from "./assets/Background.png";
const App = () => (
  <div
    style={{
      backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",

      width: "100vw",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
      overflow: "hidden",
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
