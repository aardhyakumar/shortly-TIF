import "./App.css";
import Header from "./components/Header";
import React from "react";
import Banner from "./components/Banner";
import Search from "./components/Search";
import AdvancedStatistics from "./components/AdvancedStatistics";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Search />
      <AdvancedStatistics />
    </div>
  );
}

export default App;
