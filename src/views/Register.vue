<template>
    <div class="drop-down menu">
        <form class ="px-4 py-3">
            <h3>Inscription Medecin</h3>
            <div class=row>
            <div class="form-group col">
                <label>Nom</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

              <div class="form-group col">
                <label>Prenom</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            
            <div class="form-group">
                <label>Numéro de téléphone</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Mot de passe</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

             <div class="form-group">
                <label>Confirmer mot de passe</label>
                <input type="password" class="form-control form-control-lg" />
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
    export default {
        data() {
            return {}
        }
    }
</script>
<style scoped>

</style>