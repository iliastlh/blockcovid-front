<template>
    <div class="drop-down menu">
        <form class ="px-4 py-3" v-on:submit.prevent="onSubmit">
            <h3>Inscription de votre établissement</h3>

            <div class="alert alert-danger" v-if="errors.length">
            <ul class="mb-0">
                <li v-for="(error,index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
            </div>
            <div class="form-group">
                <label>Nom Légal de la société</label>
                <input type="text" class="form-control form-control-lg" v-model="nameEstablishment"/>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" v-model="email"/>
            </div>
            
            <div class="form-group">
                <label>Numéro de téléphone</label>
                <input type="text" class="form-control form-control-lg" v-model="phonenumber"/>
            </div>
            <div class="row">
            <div class="form-group col">
                <label>Adresse</label>
                <input type="text" class="form-control form-control-lg" v-model="address"/>
            </div>
            <div class="form-group col-md-2">
                <label>Numéro</label>
                <input type="number" class="form-control form-control-lg" v-model="houseNumber"/>
            </div>
            <div class="form-group">
                <label>Code Postal</label>
                <input type="text" class="form-control form-control-lg" v-model="postCode"/>
            </div>
            </div>
            <div class="form-group">
                <label>Mot de passe</label>
                <input type="password" class="form-control form-control-lg" v-model="password" />
            </div>

             <div class="form-group">
                <label>Confirmer mot de passe</label>
                <input type="password" class="form-control form-control-lg" v-model="passwordAgain" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block" v-on:click.prevent="onSubmit">Valider Inscription</button>

            <p class="forgot-password text-right">
                Déja inscris ?  
                <router-link :to="{name: 'Login'}">Se connecter</router-link>
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data() {
            return {
                nameEstablishment: '',
                email: '',
                phonenumber: '',
                address: '',
                password: '',
                passwordAgain : '',
                houseNumber : 0,
                postcode : '',
                errors: []
            }
        },methods :{
                onSubmit(){
                    this.errors =[];

                if(!this.nameEstablishment){
                        this.errors.push("Veuillez indiquer le nom de l'établissement");
                }
                 if(!this.email){
                        this.errors.push("Veuillez indiquer votre email");

                }
                 if(!this.phonenumber){
                        this.errors.push("Veuillez indiquer votre no de telephone");
                }
                 if(!this.address){
                        this.errors.push("Veuillez indiquer l'adresse de l'etablissement");

                }
                 if(!this.houseNumber){
                        this.errors.push("Veuillez indiquer le no de votre etablissement");

                }
                 if(!this.postcode){
                                            this.errors.push("Veuillez indiquer le code postal");

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
                   
                   /*const data =  { 
                    nameEstablishment:this.nameEstablishment,
                    password : this.password,
                    passwordAgain:this.passwordAgain,
                    email:this.email,
                    address:this.address,
                    houseNumber :this.houseNumber,
                    phonenumber :this.phonenumber,
                    postcode : this.postcode
                   }*/
                }
                }
        }
    

    }
</script>
<style scoped>

</style>