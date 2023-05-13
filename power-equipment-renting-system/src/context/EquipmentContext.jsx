import { createContext, useState } from "react";
const EquipmentContext = createContext();

export function EquipmentProvider({ children }) {

    const [equipments, setEquipments] = useState([
        {
            id: '1',
            equipmentname: 'Ladder',
            manufacturer: 'suran',
            rental_price: '100',
            device_count: '100'
        },
        {
            id: '2',
            equipmentname: 'chainsaw',
            manufacturer: 'sandeepa',   
            rental_price: '200',
            device_count: '50'
        }
    ]);

    const addEquipment = ({ equipmentname, manufacturer, rental_price, device_count }) => {
        setEquipments((prevState) => [...prevState, { id: equipments.length + 1, equipmentname, manufacturer, rental_price, device_count }])
    }

    const deleteEquipment = (id) => {
        const newEquipments = equipments.filter(equipment => equipment.id != id)
        setEquipments(newEquipments)
    }

    const getEquipmentById = (id) => {
        const currentEquipment = equipments.find(equipment => equipment.id == id);
        return currentEquipment;
    }

    const updateEquipment = ({ id, equipmentname, manufacturer, rental_price, device_count }) => {
        const toUpdate = getEquipmentById(id);
        toUpdate.equipmentname = equipmentname;
        toUpdate.manufacturer = manufacturer;
        toUpdate.rental_pice = rental_price;
        toUpdate.device_count = device_count
    }

    const borrowEquipment = (id) => {
        let equipment = getEquipmentById(id);
        console.log(equipment)
        // equipment.device_count = equipment.device_count - 1;
    }


    return (
        <EquipmentContext.Provider value={{ equipments, addEquipment, deleteEquipment, getEquipmentById, updateEquipment, borrowEquipment }}>{children}</EquipmentContext.Provider>
    )

}

export default EquipmentContext;