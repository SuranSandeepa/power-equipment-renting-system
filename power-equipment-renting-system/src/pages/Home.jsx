import React, { useContext } from 'react'
import EquipmentContext from '../context/EquipmentContext'
import { Link } from 'react-router-dom';
import CustomerContext from '../context/CustomerContext';


const Home = () => {

    const { equipments } = useContext(EquipmentContext);
    const { customers } = useContext(CustomerContext)

    return (
        <div className='container'>
            <h1>Equipment list</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        equipments.map(equipment => {
                            return (
                                <tr key={equipment.id}>
                                    <td>{equipment.id}</td>
                                    <td>{equipment.equipmentname}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

            <br /> <br />
            <h1>Customer list</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>view</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        customers.map(customer => {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td> <Link to={`/customer-detail/${customer.id}`}> view customer </Link> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default Home