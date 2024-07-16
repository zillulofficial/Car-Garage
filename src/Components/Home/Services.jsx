import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices]= useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=> {
            setServices(data)
        })
    },[])
    return (
        <div className="container mx-auto mb-24">
            <div className="text-center space-y-5 mb-16">
                <p className="text-[#FF3811] text-xl font-bold">Services</p>
                <h2 className="font-bold text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or
                    randomized<br className="lg:block hidden " />words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
                <div className=" text-center">
                <button className="btn btn-outline border-[#FF3811] text-[#FF3811] w-[170px] hover:bg-slate-200 hover:border-none">More Services</button>
                </div>

        </div>
    );
};

export default Services;