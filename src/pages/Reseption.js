import React, { useEffect } from "react";

export default function Reseption() {
  useEffect(() => {
    document.getElementById("root").classList.value = "reseption";
  }, []);

  return <div>Reseption</div>;
}
