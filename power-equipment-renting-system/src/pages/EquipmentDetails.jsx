import React, { useContext, useState, useEffect } from "react";
import EquipmentContext from "../context/EquipmentContext";
import { useNavigate, useParams } from "react-router-dom";
import CustomerContext from "../context/CustomerContext";

const EquipmentDetails = () => {
  const { id } = useParams();
  const { getEquipmentById, borrowEquipment } = useContext(EquipmentContext);
  const { customers, saveBorrowedEquipments } = useContext(CustomerContext);

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [equipment, setEquipment] = useState({});

  useEffect(() => {
    setEquipment(getEquipmentById(id));
  }, []);

  const borrowAequipment = (id) => {
    const isCustomer = customers.find((customer) => customer.email == email);
    // borrowEquipment(id)
    if (isCustomer) {
      borrowEquipment(id);
      saveBorrowedEquipments(email, equipment.equipmentname);
      alert("You borrowed a equipment");
      navigate("/");
    } else {
      alert("Error");
    }
  };

  return (
    <div className="container">
      <h1>
        {equipment.equipmentname} - {equipment.manufacturer}{" "}
      </h1>
      <h3>Rental Price - {equipment.rental_price}</h3>
      <h3>Available device_count - {equipment.device_count}</h3>

      <input
        type="text"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={() => borrowAequipment(equipment.id)}
        className="btn btn-secondary"
      >
        Rent equipments
      </button>
    </div>
  );
};

export default EquipmentDetails;
