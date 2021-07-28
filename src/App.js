import "./App.css";
import Header from "./components/Header";
import React from "react";
import Banner from "./components/Banner";
import Search from "./components/Search";
import AdvancedStatistics from "./components/AdvancedStatistics";
import Booster from "./components/Booster";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Search />
      <AdvancedStatistics />
      <Booster />
      <Footer />
    </div>
  );
}

export default App;
