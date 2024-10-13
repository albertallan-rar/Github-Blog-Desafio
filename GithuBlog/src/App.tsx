import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";

import { IssueDetailsProvider } from "./context/IssuesDetailsContext";
import About from "./pages/About";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssueDetailsProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
          </Routes>
        </BrowserRouter>
      </IssueDetailsProvider>
    </ThemeProvider>
  );
}

export default App;
