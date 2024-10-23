import { defineStore } from 'pinia'
import { getData, setData, removeItem } from 'nuxt-storage/local-storage';


export const useDataStore = defineStore('users', {
    state: () => ({
        user: []
    }),

    actions: {
        // add new user
        addUser(user) {
            this.user.push({...user});
            this.setInLocalStorage();
        },

        // user updated array set in localstorage
        setInLocalStorage() {
            localStorage.setItem('user', JSON.stringify(this.user));
        },


        // if already have data in localstorage then updated store data.
        initStoreage() {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                this.user = JSON.parse(storedUser);
            }
        }
    },

    getters: {
        getUsers() {
            return this.user;
        }
    }


})