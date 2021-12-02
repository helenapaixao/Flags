import React from "react";

import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/routes/index";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
