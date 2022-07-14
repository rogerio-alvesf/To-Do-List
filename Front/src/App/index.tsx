import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "../Components/Cadastro";
import Lista from "../Components/Lista";
import Login from "../Components/Login";
import Template from "./Templates";

const App = () => {
  return (
    <Template>
      <BrowserRouter>
        <Routes>
          <Route index element={<Cadastro />} />
          <Route path="lista" element={<Lista />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Template>
  );
};

export default App;
