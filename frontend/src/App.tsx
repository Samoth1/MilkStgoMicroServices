import React from "react";
import { Routes, Route} from "react-router-dom";
import NuevoProveedorComponent from "./components/NuevoProveedorComponent";
import "rsuite/dist/rsuite.min.css";
import ArchivoComponent from "./components/ArchivoComponent";

function AppRouter() {
  return (
    <Routes>
        <Route path="/nuevoproveedor" element={<NuevoProveedorComponent />} />
        <Route path="/subirarchivos" element={<ArchivoComponent />} />
    </Routes>
  );
}

export default AppRouter;
