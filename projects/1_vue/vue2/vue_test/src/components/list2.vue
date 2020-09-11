 <template>
 <div class="">
     {{items}}

<ul>
        <li v-for="a in items">{{a}}</li>
    </ul>
 </div>

</template>

<script>

// import axios from 'axios'
export default {
    data(){
        return {
 
        //    items:this.$store.getters.arr
           
           // items:this.$store.state.arr ,
            // state:this.$store.state, 
        };
    },
    computed:{
        items(){
           let res =  this.$store.getters.arr;

            return res;
        }
    },
   async  mounted(){
        // this.$store.dispatch('loadArr');
    },
  methods:{
        plusOne(){
            this.count++;
        }   ,
        minusOne(){
            this.count--;
        }
  }
}
</script>

<style lang="css">
</style>
