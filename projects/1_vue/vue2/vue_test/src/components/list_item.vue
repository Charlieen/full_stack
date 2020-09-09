<template lang="html">
<li>
    <h3><input type="checkbox" name="" value="" v-model="checked">{{data.name}}</h3>
    {{checked}}
    <span>${{data.price}}</span>
    <span>月售:{{data.sales}}</span>

</li>
</template>
<script>

export default {
    data(){
        return {
            checked:false,
            data:{},
        } 
    },
    mounted() {
        this.data= this.$attrs.data;
        
    } ,
    watch:{
            checked(){
                if(this.checked){
                    this.$attrs.plus();
                }else{
                    this.$attrs.minus();
                }
            }
        }
}
</script>

<style lang="css">
    
</style>