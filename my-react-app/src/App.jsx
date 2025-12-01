import { Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import Layout from "./layout/Layout";


export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout/>} >

      <Route  index  element={<PostList />} />
      <Route path="/post/:id" element={<PostDetail />} />

      </Route>


    </Routes>
  );
}