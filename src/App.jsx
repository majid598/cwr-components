import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>
          CWR Components - Best Customizable UI Components Library for
          Developers
        </title>
        <meta
          name="description"
          content="Find the best customizable UI components library for developers at CWR Components. Enhance your projects with high-quality, ready-to-use components designed for seamless integration. Save time and boost productivity with our intuitive solutions. Stay tuned for our launch!"
        />
        <meta
          name="keywords"
          content="customizable UI components, UI components library, developers, high-quality UI components, CWR Components"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
