import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const serviceDetails = useLoaderData()
    const { _id, title, price, img } = serviceDetails

    const handleCheckOutService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const price = form.price.value
        const email = user?.email
        const message = form.message.value

        const booking = {
            CustomerName: name,
            date,
            img,
            service: title,
            service_id: _id,
            email,
            message,
            Price: price
        }
        console.log(booking)

        fetch('https://car-doctor-server-swart-nine.vercel.app/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
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
            <div className="container mx-auto">
                <div className="bg-[#F3F3F3]  py-16 px-28 mb-24">
                    <form onSubmit={handleCheckOutService}>
                        <div className="md:grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="form-control ">
                                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="First Name" className="input input-bordered text-[#A2A2A2] border-none" />
                                </label>
                            </div>
                            <div>
                                <label className="form-control ">
                                    <input type="date" name="date" placeholder="Date" className="input input-bordered text-[#A2A2A2] border-none" />
                                </label>
                            </div>
                            <div>
                                <label className="form-control ">
                                    <input type="text" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered text-[#A2A2A2] border-none" />
                                </label>
                            </div>
                            <div>
                                <label className="form-control ">
                                    <input type="text" name="price" defaultValue={'$' + price} placeholder="Due Amount" className="input input-bordered roboto text-sm text-[#A2A2A2] border-none" />
                                </label>
                            </div>
                            <div className="col-span-2">
                                <label className="form-control ">
                                    <textarea name="message" className="textarea textarea-bordered lg:w-full text-[#A2A2A2] border-none" placeholder="Your Message"></textarea>
                                </label>
                            </div>
                        </div>
                        <div>
                            <input className="btn Rancho text-2xl border-none bg-[#FF3811] text-white hover:text-slate-400 hover:bg-[#ff39115b] w-full mt-7 " type="submit" value="Order Confirm" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CheckOut;