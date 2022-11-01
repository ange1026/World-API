import React, {useState}from "react";
import { worldCreate } from "../api/world";

const WorldCreate = (user, msgAlert) => {

    const defaultWorld = {
        country: '',
        continent: ''
    }

    const [world, setWorld] = useState(defaultWorld)

    const handleChange = (e) => {
        setWorld(prevWorld => {
            const updatedCountry = e.target.country
            let updatedValue = e.target.value
            
            const updatedWorld = { [updatedCountry]: updatedValue }

            return { ...prevWorld, ...updatedWorld }
        })
    }

    const handleCreateWorld = () => {
        worldCreate(world, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Country',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert ({
                heading: 'Failure',
                message: 'Create Country Failure',
                variant: 'danger'
            })
        })
    }

    return (
        <>
            <input 
                type='text'
                value={world.country}
                name='country'
                onChange={handleChange}
            />
            <input 
                type='text'
                value={world.continent}
                name='continent'
                onChange={handleChange}
            />
            <button onClick={handleCreateWorld}>Create Country</button>
        </>
    )
}

export default WorldCreate