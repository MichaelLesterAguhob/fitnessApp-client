import { Button, Card, Col, Container } from "react-bootstrap";
import editIcon from '../images/edit-icon.png'
import delIcon from '../images/delete-icon.png'
import Swal from "sweetalert2";

export default function WorkoutCard({workoutData, fetchData}) {

    const {name, status, duration, dateAdded, _id} = workoutData;     

    const deleteWorkout = async(id) => {
        if(id === null  || !id) {
            return (
                Swal.fire({
                    title: 'Something went wrong.',
                    icon: 'error',
                    timer: 1500
                })
            )
        }

        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/deleteWorkout/${id}`, {
            method: "DELETE",
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

        if(!response.ok) {
            let respo = await response.json();
            throw new Error(respo.message || respo.error || "Failed on deleting workout");
        }

        const data = await response.json();
        if(data) {
            console.log(data);
            fetchData();
        }
        
    }

    return (
        <Col xs={12} sm={10} md={6} xl={4} className="py-2">
            <Card>
                <Card.Body className="d-flex flex-column ">
                    <Container className="d-flex">
                        <Button className="btn btn-light ms-auto p-0"><img src={editIcon} alt="edit"/></Button>
                        <Button className="btn btn-light p-0" onClick={() => deleteWorkout(_id)}><img src={delIcon} alt="del"/></Button>
                    </Container>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>Duration: {duration}</Card.Text>
                    <Card.Text className={status === "pending" ? 'text-danger' : 'text-success'}>Status: {status}</Card.Text>
                    {/* <Card.Text>{dateAdded}</Card.Text> */}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Button className="btn btn-primary">Mark as Done</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}