// let a:undefined = undefined;
// let b:null =null;
// let a:never=12;
function show() {
    var a = 12;
    var b = 5;
    while (1) {
        console.log(a + b);
    }
    throw new Error('have error');
    // return show();
}
show();
