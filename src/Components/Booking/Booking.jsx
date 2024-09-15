import { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import BookingLists from "./BookingLists";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Booking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure= useAxiosSecure()

    const url = `/bookings?email=${user?.email}`
    useEffect(() => {

        axiosSecure.get(url)
        .then(res=>{
            setBookings(res.data)
        })
    }, [url, axiosSecure])

    const handleDelete = id => {
        fetch(`https://car-doctor-server-swart-nine.vercel.app/bookings/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount>0) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });

                    const filter = bookings.filter(booking => booking._id !== id)
                    setBookings(filter)
                }
            })
    }

    const handleBookingsStatus = id => {
        fetch(`https://car-doctor-server-swart-nine.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({status: "Approved"})
        })
            .then(res => res.json())
            .then(data=>{
                if(data.modifiedCount > 0){
                    const remaining = bookings.filter(booking=> booking._id !== id)
                    const update= bookings.find(booking=> booking._id === id)
                    update.status= "Approved"
                    const newUpdate= [update, ...remaining]
                    setBookings(newUpdate)
                    Swal.fire({
                        title: 'Congratulations!',
                        text: 'Order added successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    bookings.map(books => <BookingLists key={books._id}
                        books={books}
                        handleDelete={handleDelete}
                        handleBookingsStatus={handleBookingsStatus}>
                    </BookingLists>)
                }
            </div>
        </div>
    );
};

export default Booking;