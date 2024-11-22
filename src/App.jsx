import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Hompage from './components/Hompage';
import Blogpage from './components/Blogpage';

function App() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route
            path="*"
            element={
              <div className="text-center mt-20 text-xl text-red-500">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
