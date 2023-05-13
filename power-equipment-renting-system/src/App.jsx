import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import Equipments from "./pages/Equipments";
import AddEquipment from "./pages/AddEquipment";
import EditEquipment from "./pages/EditEquipment";
import EquipmentDetails from "./pages/EquipmentDetails";
import CustomerDetails from "./pages/CustomerDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/equipment/:id" element={<EquipmentDetails />} />
        <Route path="/add-equipment" element={<AddEquipment />} />
        <Route path="/edit-equipment/:id" element={<EditEquipment />} />
        <Route path="/customer-detail/:id" element={<CustomerDetails />} />
      </Routes>
    </>
  );
}

export default App;
