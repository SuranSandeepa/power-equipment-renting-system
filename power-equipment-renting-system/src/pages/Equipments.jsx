import React, { useContext } from 'react'
import EquipmentContext from '../context/EquipmentContext'
import { Link } from 'react-router-dom';


const Equipments = () => {

    const { equipments, deleteEquipment } = useContext(EquipmentContext);

    const deleteEquipmentById = (id) => {
        deleteEquipment(id)
    }

    return (
        <div className='container'>
            <h1>Equipment list</h1>
            <Link to={'/add-equipment'}><button className='btn btn-success'>Add equipment</button></Link>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        equipments.map(equipment => {
                            return (
                                <tr key={equipment.id}>
                                    <td>{equipment.id}</td>
                                    <td>{equipment.equipmentname}</td>
                                    <td> <Link to={`/equipment/${equipment.id}`}>View equipment</Link> </td>
                                    <td> <Link to={`/edit-equipment/${equipment.id}`}>Edit equipment</Link> </td>
                                    <td> <button className='btn btn-danger' onClick={() => deleteEquipmentById(equipment.id)}>Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default Equipments