
const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="carousel w-full md:min-h-[750px] rounded-xl mb-24">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src="https://i.postimg.cc/fL4f2gJ3/4.jpg"
                        className="w-full lg:h-[750px]" />
                    <div className="absolute h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] gap-5  w-1/3 flex items-center">
                        <div className="pl-12 space-y-4 md:space-y-7">
                            <h1 className="text-white text-3xl lg:text-6xl font-bold text-roboto">Affordable Price For Car Servicing</h1>
                            <p className="text-white text-roboto w-80">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn border-none mr-5 bg-[#FF3811] text-white ">Discover More</button>
                                <button className="btn btn-outline border-white text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-12 bottom-3 justify-end gap-5 flex -translate-y-1/2 transform">
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img
                        src="https://i.postimg.cc/5ybq1Y5b/5.jpg"
                        className="w-full lg:h-[750px]" />
                    <div className="absolute h-full top-0 bg-gradient-to-r from-[#151515] gap-5  w-1/3 flex items-center">
                        <div className="pl-12 space-y-4 md:space-y-7">
                            <h1 className="text-white text-3xl lg:text-6xl font-bold text-roboto">Affordable Price For Car Servicing</h1>
                            <p className="text-white text-roboto w-80">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn border-none mr-5 bg-[#FF3811] text-white ">Discover More</button>
                                <button className="btn btn-outline border-white text-white ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-12 bottom-3 justify-end gap-5 flex -translate-y-1/2 transform">
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img
                        src="https://i.postimg.cc/8z0HWCGm/3.jpg"
                        className="w-full lg:h-[750px]" />
                    <div className="absolute h-full top-0 bg-gradient-to-r from-[#151515] gap-5  w-1/3 flex items-center">
                        <div className="pl-12 space-y-4 md:space-y-7">
                            <h1 className="text-white text-3xl lg:text-6xl font-bold text-roboto">Affordable Price For Car Servicing</h1>
                            <p className="text-white text-roboto w-80">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn border-none mr-5 bg-[#FF3811] text-white ">Discover More</button>
                                <button className="btn btn-outline border-white text-white ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-12 bottom-3 justify-end gap-5 flex -translate-y-1/2 transform">
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full ">
                    <img
                        src="https://i.postimg.cc/vBWLpLV0/1.jpg"
                        className="w-full lg:h-[750px]" />
                    <div className="absolute h-full top-0 bg-gradient-to-r from-[#151515] gap-5  w-1/3 flex items-center">
                        <div className="pl-12 space-y-4 md:space-y-7">
                            <h1 className="text-white text-3xl lg:text-6xl font-bold text-roboto">Affordable Price For Car Servicing</h1>
                            <p className="text-white text-roboto w-80">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn border-none mr-5 bg-[#FF3811] text-white ">Discover More</button>
                                <button className="btn btn-outline border-white text-white ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-12 bottom-3 justify-end gap-5 flex -translate-y-1/2 transform">
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white border-none">❯</a>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Banner;