import React from "react";
import { Route, Routes } from "react-router-dom";
import ListTraining from "./pages/ListTraining";

function App() {
  return (
    <div>
      <h1 className="mt-4 text-center text-3xl font-bold underline">
        Test Kamae
      </h1>
      <Routes>
        <Route path="/" element={<ListTraining />} />
      </Routes>
    </div>
  );
}

export default App;
