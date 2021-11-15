import axios from 'axios'

let headers = "955d7ae0-f8a5-441d-85a5-c4fc4ea16311";

export const AuthAPI = {
    async authMe() {
        return await axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials: true
            }).then(response => response.data)
    },

    async myProfile(response) {
        try {
            return await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.info.id}`)
        } catch {
            return 'error'
        }
    },

    async AuthLogin(data) {
        return await axios
            .post("https://social-network.samuraijs.com/api/1.0/auth/login", 
            data,
            {
                withCredentials: true
            })
    }
}

export const usersAPI = {
    async getUsers(activePage = 1, pageSize = 10) {
        const response = await axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${pageSize}`,
                {
                    withCredentials: true,
                }
            );
        return response.data;
    }
}

export const profileAPI = {
    async userProfile(match) {
        return axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${match}`, {
                withCredentials: true,
            })
    },

    async userStatus(match) {
        return axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/status/${match}`, {
                withCredentials: true,
            })
    },

    async changeStatus(status) {
        return axios
            .put(`https://social-network.samuraijs.com/api/1.0/profile/status`, { status: status }, 
            {
                withCredentials: true,
                headers: {
                    "API-KEY": headers,
                },
            })
            .then(response => response.data)
    }
}

export const followAPI = {
    async deleteFriend(id) {
        const response = await axios
            .delete(
                `https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": headers,
                },
            });
        return response.data;
    },

    async addFriend(id) {
        const response = await axios.post(
            `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {},
            {
                withCredentials: true,
                headers: {
                    "API-KEY": headers,
                },
            }
        );
        return response.data;
    }
}