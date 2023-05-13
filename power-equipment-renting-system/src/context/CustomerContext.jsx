import { createContext, useState } from "react";
const CustomerContext = createContext();


export function CustomerProvider({ children }) {

    const [customers, setCustomers] = useState([
        {
            id: '1',
            name: 'Suran Sandeepa',
            phoneNo: '1313131313',
            email: 'suran@gmail.com',
            borrowedEquipments: [
                {
                    equipmentname: 'Ladder'
                },
            ]
        },
        {
            id: '2',
            name: 'pasindu sandeepa',
            phoneNo: '113114144',
            email: 'adadqdwd@gmail.com',
            borrowedEquipments: [
                {
                    equipmentname: 'Grinder'
                }
            ]
        }
    ])

    const saveBorrowedEquipments = (email, equipmentname) => {
        let customer = customers.find(customer => customer.email == email);
        if (customer) {
            customer.borrowedEquipments.push({ equipmentname })
        }
    }

    const getCustomerById = (id) => {
        return customers.find(customer => id == id)
    }

    return (
        <CustomerContext.Provider value={{ customers, saveBorrowedEquipments, getCustomerById }}>{children}</CustomerContext.Provider>
    )
}

export default CustomerContext;