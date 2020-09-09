 <template>
 <div class="">
     已选中:{{count}}
<ul>
    <ListItem v-for="item in items" :data="item" :plus="plusOne" :minus="minusOne"/>
    </ul>
 </div>

</template>

<script>
import ListItem from './list_item'
export default {
    data(){
        return {
            count:0,
            items:[
                {name:'24k watch',price:356,sales:3581},
                {name:'24k phone',price:36,sales:358},
                {name:'24k cloth',price:56,sales:381},
                {name:'24k tower',price:156,sales:3181},
                {name:'24k watch',price:3356,sales:13581}

            ]
        };
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
