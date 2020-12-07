<template>
    <div class="drop-down menu">
        <form class ="px-4 py-3">
            <h3>Connectez-Vous</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="email"/>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="password"/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'Register'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import Axios from 'axios'
    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            onSubmit(){
                
                const data = {
                    email: this.email,
                    password: this.password
                }

                Axios
                .post('connexion', data)
            }
        }
    }
</script>
<style scoped>

</style>