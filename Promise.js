//Promises: means it is also similar to callbacks but having the in a structured way in this promises we have two conditions one is resolved and another is rejected and catch will run when it is error and finally will work either resolve or reject.
//callbacks makes relationship parents:childrens:grant childrens:grand childrens, grand grand childrens.
//promises takes the instructions first this , then this then this sooon and keep your code neat and clean.
// let stocks={
//     fruits: ['apple','banana','mango','grapes'],
//     holders: ['machinery','grocery'],
//     toppings: ['chocolate','candy'],
// }
// let is_shop_open = true;

// let order = (time, work) => {
//     return new Promise( (resolve, reject) => {
//     if(is_shop_open){
//         setTimeout( ()=>{
//             resolve(work());
//         }, time )
//     }
//     else{
//         reject(console.log("Our shop is closed"))
//     }
//     })
// }
// order(0000, () => console.log(`${stocks.fruits[0]} was selected`))


// let is_shop_closed = true;
// let orders = (time, work)=>{
//     return new Promise((resolve,reject)=>{
//         if(is_shop_closed){
//             setTimeout(()=>{
//                 resolve(work());
//             }, time)
          
//         }
//         else{
//             reject(console.log("our shop is closed"));
//         }
//     })
// }
// orders(7000, ()=>console.log(`${stocks.fruits[1]} was selected`))
// .then(()=>{
//  return order(0000, ()=>console.log("hey hello piske vidya, how are you?")); 
// }, 2000)

// .catch(()=>{
//     console.log("customer left");
// })


let customer = {
    fruits: ['apple','banana','mango','grapes'],
    toppings: ['icecream','chocolates','vanilla flavor','strawberries'],
}

let shopisopen = true;
let ord=(time, work)=>{
    return new Promise((resolve, reject)=>{
          if(shopisopen){
            setTimeout(()=>{
             resolve(work());
            }, 2000)
        }
        else{
            reject(console.log("rejected"));
        }
    })

}
ord(4000, ()=>{console.log(`ordered ${customer.toppings[0]}`)})
.then(()=>{
  console.log(`${customer.toppings[2]}`);
},6000)
.then(()=>{
    console.log(`with ${customer.toppings[3]}`);
}, 8000)
//catch it will work only the promises get rejected
.catch(()=>{
    console.log("customer left");
}, 1000)

//finally will run whether our promises resolved or rejected
.finally(()=>{
    console.log('day ended');
},1000)

