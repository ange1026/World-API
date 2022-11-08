import React, { useEffect, useState } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { worldDelete, worldShow } from '../../api/world'
// import PetUpdate from './PetUpdate' <--no longer using in lieu of the modal



const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const WorldShow = ({ user, msgAlert }) => {

    const [world, setWorld] = useState(null)
    // const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        worldShow(user, id)
            .then((res) => {
                setWorld(res.data.pet)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show World Failure' + error,
                    variant: 'danger'
                })
            })
    }, [updated])

    const handleDeleteWorld = () => {
        worldDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting a country',
                variant: 'success'
            })
            
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting a country Failure' + error,
                variant: 'danger'
            })
        })
    }
   
    if (deleted) navigate('/countries')


    return (
        <>
			<Container className="fluid">
                <Card>
                <Card.Header>{ world.fullTitle }</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <small>Country: { world.country }</small><br/>
                        <small>Continent { world.continent}</small><br/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    { 
                        pet.owner && user && pet.owner._id === user._id 
                        ?
                        <>
                            <Button onClick={() => setEditModalShow(true)} className="m-2" variant="warning">
                                Edit Country
                            </Button>
                            <Button onClick={() => handleDeleteWorld()}
                                className="m-2"
                                variant="danger"
                            >
                               
                            </Button>
                        </>
                        :
                        null
                    }
                </Card.Footer>
                    
                </Card>
            
            </Container>

            <EditCountryModal 
                user={user}
                world={world}
                show={editModalShow}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEditModalShow(false)}
            />
           
        </>
    )
}

export default WorldShow