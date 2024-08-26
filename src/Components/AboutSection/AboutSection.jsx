import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const AboutSection = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto mt-12 mb-24">
                <div className="flex items-center gap-4">
                    <p className="text-lg">Welcome to <span className="font-bold text-[#ff3811] Rancho text-3xl">Velocity </span><span className="font-bold">vault</span>, where we prioritize the health and performance
                        of your vehicle. With years of experience, our certified technicians are dedicated to providing
                        top-notch automotive care, whether you need routine maintenance or complex repairs.</p>
                    <img data-aos="zoom-in-left" className="w-1/2" src="https://i.postimg.cc/pVYXxDgQ/1.jpg" alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <img data-aos="zoom-in-right" className="w-1/2" src="https://i.postimg.cc/jdxqjDbp/2.jpg" alt="" />
                    <p className="text-lg">Our state-of-the-art facility is equipped with the latest diagnostic tools,
                        allowing us to service all makes and models with precision. From oil changes to engine diagnostics,
                        we offer a full range of services to keep your car running smoothly.</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-lg">At <span className="font-bold text-[#ff3811] Rancho text-3xl">Velocity </span><span className="font-bold">vault</span>, we believe in transparency and honesty. We take the time
                        to explain every repair and ensure that our pricing is fair and competitive. Your satisfaction
                        and trust are our top priorities.</p>
                    <img data-aos="zoom-in-left" className="w-1/2" src="https://i.postimg.cc/6q090Xdb/3.jpg" alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <img data-aos="zoom-in-right" className="w-1/2" src="https://i.postimg.cc/C5Yhk1ff/4.jpg" alt="" />
                    <p className="text-lg">Thank you for choosing <span className="font-bold text-[#ff3811] Rancho text-3xl">Velocity </span><span className="font-bold">vault</span>. We look forward to serving you and
                        keeping your vehicle in excellent condition for years to come.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutSection;