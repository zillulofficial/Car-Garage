
const AboutUs = () => {
    return (
        <div className="container mx-auto flex justify-between items-center gap-14 mb-24">
            <div className="w-1/2 relative">
                <img className="w-3/4 rounded-xl" src="https://i.postimg.cc/MHCpQ45D/person.jpg" alt="" />
                <img className="w-1/2 rounded-xl absolute right-5 top-2/3 border-white border-8" src="https://i.postimg.cc/yxgNWBmx/parts.jpg" alt="" />
            </div>
            <div className="w-1/2">
                <p className="text-[#FF3811] text-2xl font-extrabold roboto mb-5">About Us</p>
                <p className="font-bold text-5xl mb-8">We are qualified <br className="lg:block hidden "/>& of experience <br className="lg:block hidden "/>in this field</p>
                <p className="w-[490px] mb-5">There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable. </p>
                <p className="w-[490px] mb-8">the majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable. </p>
                    <button className="btn">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;