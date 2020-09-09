
export default {  data(){
                return {count:102};
            },
             methods:{
                fn(){
                    alert('bbb');
                }
            },

            template:'<div>seller:{{count}}<input type="button" value="按钮" @click="fn"></div>'

        }