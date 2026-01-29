import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SearchResultsPage from "./components/results/SearchResultsPage";
import FlightResultsPage from "./components/results/FlightResultsPage";
import TravellerDetailsPage from "./components/results/TravellerDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/results" element={<SearchResultsPage />} />
        <Route path="/payment" element={<FlightResultsPage />} />
        <Route path="/traveller" element={<TravellerDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


