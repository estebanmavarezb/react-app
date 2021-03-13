import {createContext, useState} from 'react'
import { getFirestore } from '../firebase/index';
import firebase from 'firebase/app'

export const orderContext = createContext()


function OrderContextProvider({children}) {
    const [error, setError] = useState(true);
    const [orderSummary, setOrderSummary] = useState({
        name: '',
        apellido: '',
        dni: '',
        domicilio: '',
        apartamento: '',
        postal: '',
        state_id: '',
        telefono: '',
        email: ''
    });

    
    console.log(orderSummary)
    const {name, apellido, dni, domicilio, apartamento, postal, state_id, telefono, email} = orderSummary;

    const handleInput = (e) => {
        setOrderSummary({
            ...orderSummary,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
  
        if([name, apellido, dni, domicilio, apartamento, postal, state_id, telefono, email].includes('')){
            console.log('funca!!')
            setError(true);
            return;
        }
        setError(false);
    }
    const handleBlur = e => {
        e.preventDefault();
        //if(name.trim() === '' || phoen.trim() === '' )
        if([name, apellido, dni, domicilio, apartamento, postal, state_id, telefono, email].includes('')){
            console.log('funca!!')
            setError(true);
            return;
        }
        setError(false);
    }
    const createOrder = async (cart, total) => {
        const db = getFirestore();
        const orders = db.collection('orders')
        console.log(orders)
        const buyerData = {
            name,
            apellido,
            dni,
            domicilio,
            apartamento,
            postal,
            state_id,
            telefono,
            email
        }
        const newOrder = {
            buyer: buyerData,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            items: cart,
            total: total
        }
        try{
            console.log(orders.add(newOrder))
            const { id } = await orders.add(newOrder);
            setOrderSummary({
                name: '',
                apellido: '',
                dni: '',
                domicilio: '',
                apartamento: '',
                postal: '',
                state_id: '',
                telefono: '',
                email: ''
            });
            setError(true)
            alert(`Thanks for buying!! your number ID is: ${id}`)
            
        } catch(err){
            console.log('Error')
        }
    }

    return(
        <orderContext.Provider value={{createOrder, handleBlur, handleSubmit, handleInput, error, setOrderSummary, setError}}>
            {children}
        </orderContext.Provider>
    )
}

export default OrderContextProvider