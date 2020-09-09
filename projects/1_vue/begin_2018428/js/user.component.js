 export default {
    data(){
        return {count:12};
    },
    methods:{
        fn(){
            alert('aaa');
        }
    },

    template:'<div>buyer:{{count}}<input type="button" value="按钮" @click="fn"></div>'
}