import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import Layout from "./pages/Layout";



import ScrollToTop from "./components/ui/ScrollToTop";


import Todo from "./pages/Todo";

import Github from "./pages/Github";

function App() {
  return (
    <Router>
   
      <ScrollToTop />
  
  
      <Routes>
     

        <Route element={<Layout />}>
             
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/github" element={<Github />} />
     
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
