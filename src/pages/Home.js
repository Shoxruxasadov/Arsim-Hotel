import React, { useEffect } from "react";
import Header from "../components/Home/Header";
import Statistics from "../components/Home/Main/Statistics";
import Advantage from "../components/Home/Main/Advantage";
import About from "../components/Home/Main/About";
import Review from "../components/Home/Main/Review";
import Map from "../components/Home/Main/Map";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Main/Hero";
import Rooms from "../components/Home/Main/Rooms";
import "../style/Home/home.scss";

export default function Home() {
  useEffect(() => {
    document.getElementById("root").classList.value = "home";
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Statistics /> */}
        <Rooms />
        <Advantage />
        <About />
        {/* <Review /> */}
        <Map />
      </main>
      <Footer />
    </>
  );
}
