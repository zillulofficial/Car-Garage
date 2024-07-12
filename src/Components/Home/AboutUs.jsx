
const AboutUs = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-28 md:gap-14 mb-24 md:mb-48">
            <div className="w-1/2 relative">
                <img className="md:w-3/4 rounded-xl" src="https://i.postimg.cc/MHCpQ45D/person.jpg" alt="" />
                <img className="md:w-1/2 w-3/4 rounded-xl absolute right-5 top-2/3 border-white border-8" src="https://i.postimg.cc/yxgNWBmx/parts.jpg" alt="" />
            </div>
            <div className="md:w-[490px] mx-auto">
                <p className="text-[#FF3811] text-2xl font-extrabold roboto mb-5">About Us</p>
                <p className="font-bold text-3xl md:text-5xl mb-8">We are qualified <br className="lg:block hidden "/>& of experience <br className="lg:block hidden "/>in this field</p>
                <p className=" mb-5 ">There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected
                    humour, or randomized words which do not look even slightly believable. </p>
                <p className=" mb-8 mx-auto">the majority have suffered alteration in some form, by injected humour,
                    or randomized words which do not look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white border-none">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;