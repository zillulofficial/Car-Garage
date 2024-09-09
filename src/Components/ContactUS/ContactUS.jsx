import Navbar from "../Navbar/Navbar";

const ContactUS = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto p-5">
            <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
            <div>
                <p className="mb-2">Email Address</p>
                <input type="text" placeholder="name@example.com" className="input input-bordered  w-full mb-8" />
                <p className="mb-2">Select Your Topic</p>
                <div className="mb-8">
                    <details className="dropdown">
                        <summary className=" btn w-full">Repair</summary>
                        <ul className="p-2 shadow menu   rounded-lg w-full">
                            <li><a>Engine Issues</a></li>
                            <li><a>Tire Issues</a></li>
                            <li><a>Oil</a></li>
                        </ul>
                    </details>
                </div>
                <div className="form-control w-52 mb-8">
                    <label className="label cursor-pointer">
                        <span className="label-text">Are you a member</span>
                        <input type="checkbox" defaultChecked className="checkbox checkbox-[#13131308]" />
                    </label>
                </div>
                <p className="mb-2">Elaborate You Concerns</p>
                <textarea className="textarea textarea-bordered w-full" placeholder=""></textarea>
                <button className="bg-[#ff3811] text-white px-5 py-3 rounded-xl btn">Submit</button>
            </div>
        </div>
        </div>
    );
};

export default ContactUS;