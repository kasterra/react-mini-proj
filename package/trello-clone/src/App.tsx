import React from "react";
import { Global, css } from "@emotion/react";
import normalize from "emotion-normalize";
import Routes from "./pages/Routes";

function App() {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          * {
            box-sizing: border-box;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        `}
      />
      <Routes />
    </>
  );
}

export default App;
