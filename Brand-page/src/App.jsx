import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="nav-overlay"></div>
      <HeroSection />
    </div>
  );
};

export default App;
