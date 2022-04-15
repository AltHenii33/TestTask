import axios from 'axios';


const instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    baseURL: 'https://randomuser.me/api/?inc=gender,name,location,email,picture,dob,id'
})

export const Services = {

    getUsersService(valueUsers) {
        return instance.get(`&results=${valueUsers}`);
    },

    getFilterUsersService(valueUsers, name, gender) {
        return instance.get(`&results=${valueUsers}&gender=${gender}&name=${name}`);
    },

}