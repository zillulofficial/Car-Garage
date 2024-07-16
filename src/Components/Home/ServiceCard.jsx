import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
    return (
        <div className=" mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer transition-all duration-200 hover:ease-in hover:scale-105">
                <div className="mx-auto">
                    <img className="h-56 p-3 rounded-xl" src={service.img} />
                </div>
                <div className="card-body  space-y-3">
                    <h2 className="card-title text-3xl font-bold Rancho">{service.title}</h2>
                    <div className="card-actions justify-end">
                        <p className="roboto text-[#FF3811] font-semibold">Price: ${service.price}</p>
                        <Link to={`/checkout/${service._id}`}><FaArrowRightLong className="text-lg text-[#FF3811]"></FaArrowRightLong></Link>
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default ServiceCard;