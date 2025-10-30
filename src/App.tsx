import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./pages/Home/Home"));

export default function App() {
  return (
    <div>
      <main>
        <Suspense fallback={<div className="container">Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
