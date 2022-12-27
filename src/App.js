import Header from "./pages/header";
import Home from "./pages/home";
import Subjects from "./pages/subjects";
import About from "./pages/about";
import { useState } from "react";

const App = () => {
  const [authenticated, setAuthentication] = useState(false);

  return (
    <div className="App">
      <Header />

      <div className="content">
        <Home auth={authenticated} />

        <br />
        <div className="divider"></div>
        <br />

        <Subjects />

        <br />
        <div className="divider"></div>
        <br />

        <About />
      </div>
    </div>
  );
};

export default App;
