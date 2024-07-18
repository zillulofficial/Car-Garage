
const BookingLists = ({ books, handleDelete }) => {

    
    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table mx-auto">
                    <tbody>
                        <tr>
                            <td>
                                <button onClick={()=>handleDelete(books._id)} className="btn flex mx-auto btn-sm btn-circle btn-outline">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </td>
                            <td className="w-96 mx-auto">
                                <div className="flex items-center gap-3">
                                    <div className="">
                                        <div className="mask rounded-xl w-32">
                                            <img
                                                src={books.img} className="rounded-xl h-32 " />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg ">{books.service}</div>
                                        <div className="text-sm opacity-50">{books.message}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="roboto font-bold w-96 mx-auto text-center">
                                {books.Price}
                            </td>
                            <td className="roboto text-center">{books.date}</td>
                            <th>
                                <button className="btn flex mx-auto bg-[#FF3811] text-white hover:bg-white hover:border-[#FF3811] hover:text-[#FF3811] ">Pending</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BookingLists;