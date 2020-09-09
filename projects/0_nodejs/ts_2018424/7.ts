// let a:undefined = undefined;

// let b:null =null;


// let a:never=12;


function show():never{
    let a=12;
    let b=5;
   while(1){
       console.log(a+b);
   }
   throw new Error('have error');
   // return show();
}

show();