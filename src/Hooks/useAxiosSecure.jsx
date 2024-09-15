import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-swart-nine.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, error => {
            console.log('Error found is interceptor: ', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log("SignOut the User");

                logout()
                    .then(
                        navigate('/login')
                    )
                    .catch(error => console.error(error))

            }
        })
    }, [])
    return axiosSecure
};

export default useAxiosSecure;