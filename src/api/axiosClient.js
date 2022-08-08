import { async } from "@firebase/util";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import queryString from 'query-string';
import { auth } from "../firebase/config";

const getTokenCurrentUser = async () => {
    const currentUser = auth.currentUser

    if (currentUser) {
        return await currentUser.getIdToken()
    }

    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                reject('Nothing ... ')
            }

            const token = await user.getIdToken()
            resolve(token)

            unsubscribe()
        });

    })
}

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: (params) => queryString.stringify(params)
})

axiosClient.interceptors.request.use( async (config) => {
    // const currentUserID = await auth.currentUser?.getIdToken()
    const token = await getTokenCurrentUser()
    if (token) {
        config.headers.token = `Bearer ${token}`
    }
    return config
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (errors) => {
    throw errors
})

export default axiosClient