import React from "react";
import ARSIM from "../../image/ARSIM.svg";
import "../../style/Home/header.scss";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={ARSIM} alt=" " />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Room</li>
            <li>About</li>
            <li>Map</li>
            <li>Contact</li>
          </ul>
        </nav>
        <a href="tel:+998777007070">+998 77 700 70 70</a>
      </div>
    </header>
  );
}
