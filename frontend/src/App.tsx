import React from "react";
import { Routes, Route} from "react-router-dom";
import NuevoProveedorComponent from "./components/NuevoProveedorComponent";
import "rsuite/dist/rsuite.min.css";

function AppRouter() {
  return (
    <Routes>
        <Route path="/nuevoproveedor" element={<NuevoProveedorComponent />} />
    </Routes>
  );
}

export default AppRouter;
