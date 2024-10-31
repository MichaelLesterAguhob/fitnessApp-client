import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import WorkoutCard from "../components/WorkoutCard"

export default function Workout() {
    const token = localStorage.getItem('token');
    const [workouts, setWorkouts] = useState([]); 

    useEffect(() => {
        if( token !== null) {
            fetch(`${process.env.REACT_APP_API_BASE_URL}/workouts/getMyWorkouts`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.workouts) {
                    setWorkouts(data.workouts.map(workout => {
                        return(
                            <WorkoutCard key={workout._id} workoutData={workout}/>
                        )
                    }))
                }
            })
        } else {
            setWorkouts( () => {
                return(
                    <h1 className="text-light">No workout yet. Add one now.</h1>
                )
            })
        }
    }, [])

    

    return (
        <Container className="h-100 overflow-auto workoutCardContainer">
            <h1 className="text-light mt-5 p-2 rounded bg-primary">Your Workouts</h1>
            <Row className="d-flex justify-content-center mt-3 mb-5">
                 {workouts}
            </Row>
        </Container>
    )
}
