import React, { useContext } from 'react'
import CustomerContext from '../context/CustomerContext'
import { useParams } from 'react-router-dom'

const CustomerDetails = () => {

    const { getCustomerById } = useContext(CustomerContext)

    const { id } = useParams();



    return (
        <div className='container'>
            <h1>{getCustomerById(id).name}</h1>
            <h2>{getCustomerById(id).email} - {getCustomerById(id).phoneNo}</h2>

            <ul>
                {

                    getCustomerById(id).borrowedEquipments.map(equipment => {
                        return(
                            <li>{equipment.equipmentname}</li>
                        )
                    })

                }

            </ul>

        </div>
    )
}

export default CustomerDetails