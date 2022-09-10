import { auth } from "config/firebase";

export const customFetch = async (url, is_auth = false, options = {}) => {

    const token = is_auth ? await auth.currentUser.getIdToken(idToken => idToken) : ''
    
    return await fetch(
                    url, 
                    {
                        ...(options || {}),
                        headers: {
                            ...(options?.headers || {}),
                            ...(is_auth && token ? {Authorization: `Bearer ${token}`} : {}),
                        },
                    }
                )
                    .then(res => res.json())
                    .then((res) => {
                        if (res.status === 200) {
                            return res
                        } else {
                            throw new Error("Status: "+res.status)
                        }
                    })
}
