import React, { useContext, useState } from 'react'
import EquipmentContext from '../context/EquipmentContext'
import { useNavigate } from 'react-router-dom'


const AddEquipment = () => {

    const navigate = useNavigate();

    const [equipment, setEquipment] = useState({
        equipmentname: '',
        manufacturer: '',
        rental_price: '',
        device_count: ''
    })

    const { addEquipment } = useContext(EquipmentContext);

    const addEquipmentData = (e) => {
        e.preventDefault();
        addEquipment(equipment)
        navigate('/equipments')
    }

    return (
        <div className='container'>
            <h1>Add equipment</h1>
            <form onSubmit={addEquipmentData}>
                <div className='mb-3'>
                    <label htmlFor="">Equipment Name</label>
                    <input type="text" name='equipmentname' className='form-control' onChange={(e) => setEquipment({ ...equipment, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Manufacturer</label>
                    <input type="text" name='manufacturer' className='form-control' onChange={(e) => setEquipment({ ...equipment, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Rental Price</label>
                    <input type="text" name='rental_price' className='form-control' onChange={(e) => setEquipment({ ...equipment, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Count Of Devices</label>
                    <input type="text" name='device_count' className='form-control' onChange={(e) => setEquipment({ ...equipment, [e.target.name]: e.target.value })} />
                </div>
                <div className='mb-3'>
                    <button type='submit' name='submit' className='btn btn-primary' value="Add equipment">Add equipment</button>
                </div>
            </form>
        </div>
    )
}

export default AddEquipment