
import { useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {UserProvider} from './UserContext';

import './App.css';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Login from './pages/Login';
import Workout from './pages/Workout';


function App() {
  
    const [user, setUser] = useState({
        id: null
    })

    function unsetUser() {
        localStorage.clear();
    }

    
        //     useEffect(() => {
        //         if(localStorage.getItem('token') !== null) {
        //             fetch(`https://fitnessapp-api-ln8u.onrender.com/users/details`, {
        //                 headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        //             })
        //             .then(res => res.json())
        //             .then(data => {
        //                     if(data) {
        //                         setUser({
        //                         id: data.user._id
        //                     })
        //                 }
        //             })
        //         } else {
        //             setUser({
        //                 id: null
        //             })
        //         }
        // }, [])
   
  
    return (
        <UserProvider value={{user, unsetUser, setUser}}>
            <Router>
                <NavBar />
                <Container className='bg-secondary main-container mt-5' fluid>
                    <Routes>
                        <Route path='/register' element={<Register />}/>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/workouts' element={<Workout />}/>
                    </Routes>
                </Container>
            </Router>
        </UserProvider>
  );
}

export default App;
