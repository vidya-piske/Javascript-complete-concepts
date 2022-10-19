//Async/Await


let stocks = {
    fruits: ['apples','bananas','mangoes','grapes'],
    toppings: ['chocolate','candy','strawberries'],
    holder: ['cone'],
    liquid: ['water','ice'],
}
 let is_shop_open = true;

 function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve, ms);
        }
        else{
            reject(console.log("shop is closed!"));
        }
    })
 }

 async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.fruits[0]} was selected`);

        await time(0000);
        console.log('start the production');

        await time(2000);
        console.log('cut the fruit');

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000);
        console.log("start the machine");

        await time(2000);
        console.log(`ice cream placed on ${stocks.holder[0]} `)

        await time(3000);
        console.log(`${stocks.toppings[0]} was selected`);

        await time(2000);
        console.log('serve ice cream');
    }
    catch(error){
        console.log("customer left", error);
    }
    finally{
        console.log("day ended, shop is closed");
    }
 }

 kitchen();

 function fact(n){
    if(n==0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }   
 }
 let n = 5;
 let result = fact(n);
 console.log(result);

 function rec(){
    console.log("hello recursive");
    rec();
 }