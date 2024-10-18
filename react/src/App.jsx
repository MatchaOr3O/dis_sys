import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/" element={<Layout/>} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementByID('root'));
root.render(<App/>);
