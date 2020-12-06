<template>
    <div class = "doctor">
        <button type="button" v-on:click="generate" id="generate">Genérer un QRCode</button>
        <div id="qr">
            <vue-qrcode id="qrcode" value="" v-model= "id_qr"/>
        </div>
    </div>
</template>

<script>
    import VueQrcode from 'vue-qrcode'
    
    export default {
        data(){
            return{
                id_qr :''
            }
        },
        components: {
            VueQrcode,
        },
        methods: {
            generate: function () {
                this.id_qr = String(Math.floor(Math.random() * 1000000));
            }
        }
    }
</script>

<style scoped>

</style>