import React from "react";
import { Routes, Route} from "react-router-dom";
import NuevoProveedorComponent from "./components/NuevoProveedorComponent";
import "rsuite/dist/rsuite.min.css";
import ArchivoComponent from "./components/ArchivoComponent";
import ProveedoresComponent from "./components/ProveedoresComponent";
import HomeComponent from "./components/HomeComponent";

function AppRouter() {
  return (
    <Routes>
        <Route path="/nuevoproveedor" element={<NuevoProveedorComponent />} />
        <Route path="/subirarchivos" element={<ArchivoComponent />} />
        <Route path="/mostrarproveedores" element={<ProveedoresComponent />} />
        <Route path="/home" element={<HomeComponent />} />
    </Routes>
  );
}

export default AppRouter;
