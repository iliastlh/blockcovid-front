<template>
    <div class="drop-down menu">
          <h3>Connectez-Vous</h3>
        <form class ="px-4 py-3" v-on:submit.prevent ="onSubmit">
          <div class="alert alert-danger" v-if="errors.length">
            <ul class="mb-0">
                <li v-for="(error,index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>

          </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg " v-model="email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block" v-on:click.prevent= "onSubmit">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'Register'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
                errors: []
            }
        },methods :{
                async onSubmit(){
                    const response = await axios.post('login',{
                        email : this.email,
                        password: this.password
                    });
                    
                    localStorage.setItem('token' ,response.data.token);

                    this.errors =[];

                 if(!this.email){
                        this.errors.push("Veuillez indiquer votre email");

                }
                 
                 
                 if(!this.password){
                        this.errors.push("Veuillez indiquer le mdp");

                }
                if(!this.errors.length){
                   
                  const dataa =  { 
                    password : this.password,
                    email:this.email,
                   }
                   console.log(dataa);
                }
                console.log(this.email);
                console.log(this.errors);
                localStorage.setItem()
       
            }
        }
    }
</script>
<style scoped>

</style>