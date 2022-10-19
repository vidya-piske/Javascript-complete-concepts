// // function myFunction(){
// //     console.log("Iam clicked!");
// // }

// //new method for event listener
// //click: is an event and functionname is an function
// // var button = document.querySelector("button");
// // button.addEventListener("click", function(){
// //     console.log("Javascript");
// // })

// //another method to use eventhandler
// // var button = document.querySelector("button");
// // button.addEventListener("click", myFunction)
// // function myFunction(){
// //     var listItems = document.getElementsByClassName("list-items");
// //     console.log(listItems);
// //     for(var i=0;i<listItems.length;i++){
// //         listItems[i].style.backgroundColor="orange";
// //         listItems[i].style.margin="2px";
// //         listItems[i].innerHTML = "Vegetables";
// //         listItems[i].style.color = "white";
// //     }
// // }


// // var h1 = document.getElementById("heading");
// // h1.addEventListener("click", function(){
// //     console.log("hello");
// //     h1.style.color = "red";
// // })

// // var btn = document.getElementById("btn");
// // btn.addEventListener("click", function(){
// //     console.log("button clicked!");
// //     btn.style.color = "orange";
// //     btn.innerHTML = "Submit";
// // })

// //Event argument
// //event: means it is an object
// var button = document.querySelector("button");
// button.addEventListener("click", myFunction);
// function myFunction(e){ 
// console.log(e);
// }

// var h1 = document.createElement("h1");
// var text = document.createTextNode("This is a new beginning");
// h1.appendChild(text);
// h1.id='title';
// var body=document.querySelector('body');
// body.appendChild(h1);
// var button = document.getElementById("title");
// button.addEventListener('click', function(e){
//     button.style.color="red";
//     button.innerHTML = e.altKey;
//     console.log(e.altKey);
//     button.innerHTML = e.shiftKey;
//     console.log(e.shiftKey);
// })
// //offsetX: we are getting the value from actual element
// //clientX: we are getting the value from browser window

//Mouse Events: =>
//mousedown,mouseup,mouseenter,mouseout,mouseleave

var newElement = document.getElementById("newElement");
newElement.addEventListener("click", function(e){
      newElement.style.backgroundColor="rgb("+e.offSetX+","+e.offSetY+",23)";
      //console.log(e.type);
});

//if u want to select the input field:

// var input=document.querySelector('input[type="email"]');
// console.log(input);

// var btn=document.getElementById("btn");
// btn.addEventListener("click", function(){
//     const h1 = document.getElementById("h1").innerHTML = "Hello Vidya";
//     document.body.style.color="red";
// })

//input event
//keypress, keydown
// var input=document.querySelector('input[type="text"]');
// console.log(input);
// input.addEventListener("keydown", myFunction);
// function myFunction(e){
//     console.log(e.type);
// }

//u need to get the paragraph value as a entered text
// var input=document.querySelector('input[type="text"]');
// // console.log(input);
// input.addEventListener("keydown", myFunction);
// function myFunction(e){
// var p=document.querySelector('p');
// p.innerHTML=e.target.value;
// }

// var input=document.getElementById("name");
// input.addEventListener("keypress", function(e){
//    var p=document.querySelector('p');
//    p.innerHTML=e.target.value;
// })

//select change function
var select=document.querySelector('select');
select.addEventListener("change", function(e){
    console.log(e.type);
})