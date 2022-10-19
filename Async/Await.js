//Async/Await: better way to write promises

let stocks={
    fruits: ["apple","banana","mango","grapes"],
    toppings: ["chocolate","cone","candy"],
}
let is_shop_open = true
// function abc(){
//     console.log("Hello Wait");
// }

// async function order(){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc doesn't exists", error)
//     }
//     finally{
//         console.log("Runs code anyways");
//     }
// }
// order();
let toppings_choice = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve( console.log("which toppings you love!"));    
        }, 3000);
    });
};
async function kitchen(){
    console.log("A");
    console.log("B");
    console.log("C");
    await toppings_choice()
    console.log("D");
    console.log("E");
}
kitchen()
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others order");

