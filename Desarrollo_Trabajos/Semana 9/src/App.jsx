import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Services from './pages/Services';
import NoPage from './pages/NoPage';


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="bg-blue-500 text-black py-10">
          <h1 className="text-5xl font-bold text-center">Uso de Rutas en React</h1>
        </div>
        <div className="flex flex-grow">
        <div className="w-1/4 bg-blue-200 p-4 text-3xl flex flex-col justify-center items-center">
        <Layout />
        </div>
        <div className="w-3/4 bg-white p-4 flex justify-center items-center text-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;