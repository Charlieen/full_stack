 <template>
 <div class="">
     {{state.count}}
     已选中:{{count}}
<ul>
    <ListItem v-for="item in items" :data="item" :plus="plusOne" :minus="minusOne"/>
    </ul>
 </div>

</template>

<script>
import ListItem from './list_item'
// import axios from 'axios'
export default {
    data(){
        return {
            count:0,
            items:[],
            state:this.$store.state,
        };
    },

   async  mounted(){
        // try {
        //     let res = await this.ajax('http://localhost:8081/list');
        //     this.items = res.data;
        // } catch (error) {
        //     alert('data loaded failue,')
        // }

       let res =  await fetch('http://localhost:8081/list')
       let data = await res.json();

       this.items=data;
       console.log(data);
    
      //  console.log(this.ajax);
    },
  components: {ListItem},
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
