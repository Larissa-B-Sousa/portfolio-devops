import React, { useState, useEffect } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import ContactForm from './components/ContactForm';  
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Modo Escuro" : "Modo Claro"}
      </button>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <ContactForm />
    </div>
  );
};

export default App;



