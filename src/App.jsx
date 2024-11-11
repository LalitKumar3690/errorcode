import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import necessary router components
import CodeEditor from "./components/CodeEditor";
import Home from "./components/Home";
import Languages from "./components/Languages";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm"
import Document from "./components/Document";
import Nav from "./components/Nav";
// import { ChakraProvider } from "@chakra-ui/react"; // Uncomment if you're using ChakraProvider

function App() {
  return (
    <Router>
      <Nav/>
      <div>
        {/* Define Routes for navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CodeEditor" element={<CodeEditor />} />
          <Route path="/Languages" element={<Languages />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/Document" element={<Document/>}/>
        </Routes>
        {/* Footer should be displayed on all pages */}
      </div>
        <Footer />
    </Router>
  );
}

export default App;
