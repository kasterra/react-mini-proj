import React from "react";
import normalize from "emotion-normalize";
import { css, Global, useTheme } from "@emotion/react";
import Routes from "./Pages/Routes";

const App = () => {
  const theme = useTheme();
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          * {
            box-sizing: border-box;
          }
          body {
            font-family: "Source Sans pro", sans-serif;
            background-color: ${theme.bgColor};
            color: ${theme.textColor};
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
};

export default App;
