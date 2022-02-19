import React, { Suspense, lazy, useState } from "react";
import "./style.scss";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

const RedPage = lazy(() => import("./pages/RedPage"));
const BluePage = lazy(() => import("./pages/BluePage"));

const Root = () => {
  const [clicked, setClickced] = useState(false);

  const onButtonClicked = async () => {
    const { default: alert } = await import("./alert");
    alert();
  };
  return (
    <div>
      <input type="button" onClick={onButtonClicked} value="alert" />
      <Menu />
      <hr />
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/red" element={<RedPage />} />
          <Route path="/blue" element={<BluePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Root;
