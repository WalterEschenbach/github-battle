import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { FaLightbulb } from "react-icons/fa";

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <button
            style={{ fontSize: 30 }}
            className="btn-clear"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <FaLightbulb size={30} />
            ) : (
              <FaLightbulb size={30} />
            )}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
