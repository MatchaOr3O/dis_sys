import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import GetAllUser from "./components/GetAllUser";
import PostUser from "./components/PostUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home/>} />
          <Route path="post" elememt={<PostUser/>} />
          <Route path="get" elememt={<GetAllUser/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root')); //I"d"小寫
root.render(<App/>);
