import axiosLib from 'axios';

const axios = axiosLib.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export default {
    
    requestTest: async () => {
        try {
            const { data } = await axios.get('/medecins/1');
            return data;
        } catch(err) {
            return err;
        }
    }
}
