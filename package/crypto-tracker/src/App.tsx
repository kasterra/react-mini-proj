import normalize from "emotion-normalize";
import { css, Global, ThemeProvider } from "@emotion/react";
import Routes from "./Pages/Routes";
import { useUIStore } from "./store/UIStore";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const isDarkTheme = useUIStore((state) => state.isDarkTheme);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
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
    </ThemeProvider>
  );
};

export default App;
