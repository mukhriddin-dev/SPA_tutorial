import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import News from "./Pages/News/News";
import Login from "./Pages/Login/Login";
import Error from "./Pages/Erorr/Error";
import NewsItem from "./Pages/News/NewsItem";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BreakingNews from "./Pages/News/BreakingNews";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Error />} />
            <Route path="/news" element={<News />} />

            <Route path="/news" element={<News />}>
              <Route path="/news/newsuz" element={<NewsItem />} />
              <Route path="/news/newssport" element={<BreakingNews />} />
            </Route>

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
