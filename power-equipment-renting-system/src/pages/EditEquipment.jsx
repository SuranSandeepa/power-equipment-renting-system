import React, { useContext, useState } from 'react'
import EquipmentContext from '../context/EquipmentContext'
import { useNavigate, useParams } from 'react-router-dom'


const EditEquipment = () => {

    const { id } = useParams();
    const navigate = useNavigate()

    const { getEquipmentById, updateEquipment } = useContext(EquipmentContext);

    const [equipment, setEquipment] = useState({
        equipmentname: getEquipmentById(id).equipmentname,
        manufacturer: getEquipmentById(id).manufacturer,
        rental_price: getEquipmentById(id).rental_price,
        device_count: getEquipmentById(id).device_count
    })

    const updateEquipmentData = (e) => {
        e.preventDefault();
        updateEquipment({ ...equipment, id })
        navigate("/equipments")
    }


    return (
        <div className='container'>
            <h1>Update equipment</h1>
            <form onSubmit={updateEquipmentData}>
                <div className='mb-3'>
                    <label htmlFor="">Equipment equipmentname</label>
                    <input type="text" name='equipmentname' className='form-control' value={equipment.equipmentname} onChange={(e) => setEquipment({ ...equipment, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Manufacturer</label>
                    <input type="text" name='manufacturer' className='form-control' value={equipment.manufacturer} onChange={(e) => setEquipment({ ...equipment, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Rental Price</label>
                    <input type="text" name='rental_price' className='form-control' value={equipment.rental_price} onChange={(e) => setEquipment({ ...equipment, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Count Of Devices</label>
                    <input type="text" name='device_count' className='form-control' value={equipment.device_count} onChange={(e) => setEquipment({ ...equipment, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <button type='submit' name='submit' className='btn btn-primary' value="Add equipment">Update equipment</button>
                </div>
            </form>
        </div>
    )
}

export default EditEquipment