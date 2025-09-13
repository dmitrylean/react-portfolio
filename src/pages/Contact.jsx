import React, { useEffect } from "react";
import WorksSection from "../components/WorksSection";

function Contact() {
  useEffect(() => {
    document.title = "Dmitry Lean | Contact";
  }, []);

  return (
    <WorksSection />
  );
}

export default Contact;