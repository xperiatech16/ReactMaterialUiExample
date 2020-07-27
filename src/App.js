import React from "react";
import "./styles.css";
import ButtonComponent from "./components/ButtonComponent";
import AppBarComponent from "./components/AppBarComponent";

export default function App() {
  return (
    <div className="App">
      <AppBarComponent />
      <ButtonComponent />
    </div>
  );
}
