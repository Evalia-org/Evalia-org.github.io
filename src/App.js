import './App.css';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Posts from './pages/Posts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Research from './pages/Research';




function App() {
  return (
    <div className="bg-epeach overflow-clip">
       <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
       
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/research" element={<Research />} />
      </Routes>
      <Footer />
    </Router>
      
    </div>
  );
}

export default App;
