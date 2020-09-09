import user from './user.component';
import company from './company.component';

    // 1. config router
let router = new VueRouter({
    routes:[
        {path:'/user',
        component:user },

        {path:'/company',
         component:company}

    ]
});

    //2.create Vue
    let vm= new Vue({
        el:'#div1',
        router:router,
        
    })


export default router;