import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise:id" element={<h1>exercise</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
