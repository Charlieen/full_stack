<template lang="html">
<li>
    <h3><input type="checkbox" name="" value="" v-model="checked">{{data.name}}</h3>
    {{checked}}
    <span>${{data.price}}</span>
    <span>月售:{{data.sales}}</span>
    <input type="button" value="Add one" @click="fnAdd">
    <input type="button" value="Minus one" @click="fnMinus">


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
    methods:{
        fnAdd(){
            this.$store.dispatch('addCount',4);
        },
        fnMinus(){
             this.$store.dispatch('minusCount',2);         
        }
    },
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