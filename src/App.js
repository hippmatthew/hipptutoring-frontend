import Navbar from "./components/navbar";
import Home from "./components/home";
import Subjects from "./components/subjects";
import About from "./components/about";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home />
        <Subjects />
        <About />
      </div>
    </div>
  );
};

export default App;
