import React, { useEffect } from "react";
import WorksSection from "../components/WorksSection";

function Contact() {
  useEffect(() => {
    document.title = "Script2Call | Менеджер скриптов";
  }, []);

  return (
    <WorksSection />
  );
}

export default Contact;