import React, { useEffect } from "react";
import WorksSection from "../components/WorksSection";

function Service() {
  useEffect(() => {
    document.title = "Dmitry Lean | Services";
  }, []);

  return (
    <WorksSection />
  );
}

export default Service;