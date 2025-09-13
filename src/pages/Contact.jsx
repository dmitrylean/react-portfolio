import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";

function Contact() {
  useEffect(() => {
    document.title = "Dmitry Lean | Contact";
  }, []);

  return (
    <ContactSection />
  );
}

export default Contact;