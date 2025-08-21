import { useState } from "react";
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="mode"
    >
      change to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
function Page({ theme }) {
  const pageStyle = {
    backgroundColor: theme === "light" ? "#e7c194ff" : "#120364ff",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={pageStyle}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
    </div>
  );
}
export default function Darkmode() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <Page theme={theme} />
      <div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </>
  );
}
