<template>
    <div class = "doctor">
        <button type="button" class="btn btn-primary btn-lg active mt-0" v-on:click="generate" id="generate">Genérer un QRCode</button>
        <div id="qr">
            <vue-qrcode id="qrcode" value="" v-model= "id_qr"/>
        </div>
        <button class="btn btn-primary btn-lg active mt-0"  @click="print">Imprimez le QR Code</button>
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
            },
            print(){
                this.$htmlToPaper('qr');
            }
        }
        
    }
</script>

<style scoped>

</style>