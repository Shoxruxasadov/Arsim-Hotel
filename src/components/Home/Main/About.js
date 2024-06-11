import React from "react";
import basse from "../../../image/basse.jpg";
import "../../../style/Home/about.scss"

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="basse">
          <img src={basse} alt="About" />
        </div>
        <div className="title">
          <h3>Discover our History</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button>Explore More</button>
        </div>
      </div>
    </section>
  );
}
