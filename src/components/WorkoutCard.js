import { Button, Card, Col, Container } from "react-bootstrap";
import editIcon from '../images/edit-icon.png'
import delIcon from '../images/delete-icon.png'

export default function WorkoutCard({workoutData}) {

    const {name, status, duration, dateAdded} = workoutData;     

    return (
        <Col xs={12} sm={10} md={6} xl={4} className="py-2">
            <Card>
                <Card.Body className="d-flex flex-column ">
                    <Container className="d-flex">
                    
                        <Button className="btn btn-light ms-auto p-0"><img src={editIcon} alt="edit"/></Button>
                        <Button className="btn btn-light p-0"><img src={delIcon} alt="del"/></Button>
                    </Container>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>Duration: {duration}</Card.Text>
                    <Card.Text>Status: {status}</Card.Text>
                    {/* <Card.Text>{dateAdded}</Card.Text> */}
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Button className="btn btn-success">Completed</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}