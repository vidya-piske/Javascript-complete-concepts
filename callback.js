//callback function: means one function inside the another function. 
//relation between two functions is called as callback function.

function one(onended){
    console.log("hey vidya");
    onended();
}
function two(){
    console.log("Hey vidya not selected");
}
one(two);

function one(n){
    console.log("Hey step1");
    n();
}
function two(){
    console.log("Hey step2");
}
one(two);

let stocks={
    fruits: ['apple','banana','mango','grapes'],
    liquid: ['water','ice'],
    holder: ['cone','cup','stick'],
    toppings: ['chocolate','peanuts']
};

let order = (Fruit_name, call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[Fruit_name]} was selected`);
        call_production();
    },2000);
}
let production = ()=>{
    setTimeout(()=>{
        console.log("production has started");

        setTimeout(()=>{
            console.log("The fruit has been chopped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(()=>{
                    console.log("The machine was started");

                    setTimeout(()=>{
                        console.log("")
                    })
                },1000);
            },1000);
        },2000);
    },0000)  ; 
};
order(0, production);


