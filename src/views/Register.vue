<template>
    <div class="drop-down menu">
        <form class ="px-4 py-3">
            <h3>Inscription Medecin</h3>
            <div class=row>
            <div class="form-group col">
                <label>Nom</label>
                <input type="text" class="form-control form-control-lg" v-model="name"/>
            </div>

              <div class="form-group col">
                <label>Prenom</label>
                <input type="text" class="form-control form-control-lg" v-model="firstname"/>
            </div>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" v-model="email" />
            </div>
            
            <div class="form-group">
                <label>Numéro de téléphone</label>
                <input type="text" class="form-control form-control-lg" v-model="phonenumber"/>
            </div>

            <div class="form-group">
                <label>Mot de passe</label>
                <input type="password" class="form-control form-control-lg" v-model="password"/>
            </div>

             <div class="form-group">
                <label>Confirmer mot de passe</label>
                <input type="password" class="form-control form-control-lg" v-model="passwordAgain"/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block"> Valider Inscription</button>

            <p class="forgot-password text-right">
                Déja inscris ?  
                <router-link :to="{name: 'Login'}">Se connecter</router-link>
            </p>
        </form>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'register',
        data() {
            return {
                firstname: '',
                name: '',
                email: '',
                phonenumber: '',
                password: '',
                passwordAgain : '',
                errors: []
            }
        },methods :{
            onSubmit(){
                this.errors =[];

                if(!this.firstname){
                    this.errors.push("Veuillez indiquer le nom de l'établissement");
                }
                if(!this.email){
                    this.errors.push("Veuillez indiquer votre email");
                }
                if(!this.phonenumber){
                    this.errors.push("Veuillez indiquer votre no de telephone");
                }
            
                 if(!this.surname){
                    this.errors.push("Veuillez indiquer l'adresse de l'etablissement");
                }
                 
                 if(!this.password){
                    this.errors.push("Veuillez indiquer le mdp");

                }
                 if(!this.passwordAgain){
                    this.errors.push("Veuillez confirmer votre mot de passe");

                }
                 if(this.passwordAgain!==this.password){
                    this.errors.push("Les mots de passe sont différents");

                }
                if(!this.errors.length){
                   
                    const doctor = {
                        firstname: this.firstname,
                        name: this.name,
                        email: this.email,
                        numero: this.phonenumber,
                        password: this.password,
                        passwordAgain : this.passwordAgain
                    }

                    axios
                    .post('medecins/inscription', doctor)
                    .then()
                }
            },
        },
    }
</script>
<style scoped>

</style>