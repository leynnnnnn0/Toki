import { create } from 'zustand'
import axios from 'axios'
export const userStore = create(set => ({
    user: "",
    access: false,
    getUser: async (username, password) => {
        try {
            set({access: false});
            const result = await axios.post('http://localhost:8000/api/users/login', {username, password})
            if(!result.data.access) {
                window.alert(result.data.message)
                return false;
            }         
            set(
                {user: result.data.currentUser,
                access: true
            });
            return true;
            
        } catch (e) {
            console.log(e.message);
        }
    }
}))