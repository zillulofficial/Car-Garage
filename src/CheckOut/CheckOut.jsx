import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const CheckOut = () => {
    const serviceDetails = useLoaderData()
    const { _id, service_id, title } = serviceDetails

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const subName = form.subName.value
        const price = form.price.value
        const rating = form.rating.value
        const time = form.time.value
        const details = form.details.value
        const customization = form.customization.value
        const stock = form.stock.value
        const photoURL = form.photoURL.value
        const email = user.email
        const userName = user.displayName

        const product = {
            name, subName, price, rating, time, details, customization, stock, photoURL, email, userName
        }
        console.log(product)

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <div className="bg-[#F3F3F3]  py-16 px-28 mb-24">
                    <form onSubmit={handleAddProduct}>
                        <div className="md:grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="form-control ">
                                    <input type="text" name="name" placeholder="First Name" className="input input-bordered " />
                                </label>
                            </div>
                            <div>
                                <label className="form-control ">
                                    <input type="text" name="subName" placeholder="Last Name" className="input input-bordered " />
                                </label>
                            </div>
                            <div>
                                <label className="form-control ">
                                    <input type="text" name="price" placeholder="Your Phone" className="input input-bordered " />
                                </label>
                            </div>
                            <div>
                                <label className="form-control ">
                                    <input type="text" name="rating" placeholder="Your Email" className="input input-bordered " />
                                </label>
                            </div>
                            <div className="col-span-2">
                                <label className="form-control ">
                                    <textarea className="textarea textarea-bordered lg:w-full" placeholder="Your Message"></textarea>
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