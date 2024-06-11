import React, { useEffect } from "react";

export default function Reservation() {
  useEffect(() => {
    document.getElementById("root").classList.value = "reservation";
  }, []);

  return <div>Reservation</div>;
}
