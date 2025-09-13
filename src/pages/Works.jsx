import React, { useEffect } from "react";
import WorksSection from "../components/WorksSection";

function Auth() {
  useEffect(() => {
    document.title = "Script2Call | Менеджер скриптов";
  }, []);

  return (
    <WorksSection />
  );
}

export default Auth;