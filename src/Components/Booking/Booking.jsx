import { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import BookingLists from "./BookingLists";

const Booking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res=>res.json())
            .then(data=>{
                setBookings(data)
            })
    }, [])

    const handleDelete= id =>{
        fetch(`http://localhost:5000/bookings/${id}`, {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    bookings.map(books=><BookingLists key={books._id} books={books} handleDelete={handleDelete}></BookingLists>)
                }
            </div>
        </div>
    );
};

export default Booking;