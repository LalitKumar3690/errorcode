import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import Home from "./components/Home";
import Languages from "./components/Languages";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
// import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      {/* <CodeEditor/> */}
      <Home/>
      <Languages/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default App;
