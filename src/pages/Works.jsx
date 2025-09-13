import React, { useEffect } from "react";
import WorksSection from "../components/WorksSection";

function Works() {
  useEffect(() => {
    document.title = "Dmitry Lean | Works";
  }, []);

  return (
    <WorksSection />
  );
}

export default Works;