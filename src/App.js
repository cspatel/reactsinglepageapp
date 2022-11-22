import "./styles.css";
import ThemeButton from "./ThemeButtons";
import ThemeProvider from "./ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Nav from "./Nav";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="service" element={<Service />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <Header /> */}
      </div>
    </ThemeProvider>
  );
}
