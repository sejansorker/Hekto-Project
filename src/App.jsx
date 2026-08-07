
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
