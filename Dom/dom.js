//innerHTML: means if you want to change the text or content inside the document then use innerHTML.
//textContent: is going to ignore the styles inside the document.
//innerText: it will give attention to the styling part.
//querySelector: means if u have many anchor tags u want to select only first tag then use querySelector.in other words will select only first element
//querySelectorAll: means will select all the elements with that tagname
//while using the querySelector u need to specify if we use id: # symbol and for class: . symbol mandatory
//appendChild: means u need to add at the end.

// window.addEventListener
//     ("DOMContentLoaded", ()=>{
//         console.log(document.getElementById("heading"));
//     })

// var heading = document.getElementById("heading");
// heading.innerHTML = "JavaScript";

// var p = document.querySelector('p');
// p.innerHTML = "Hey";

// var heading = document.getElementById("heading");
// console.log(heading.textContent);
// console.log(heading.innerText);

// var listItems = document.getElementsByClassName("list-items");

// listItems[2].style.color="red";

// var i;
// for(i=0;i<listItems.length;i++){
//     listItems[i].style.backgroundColor="pink";
//     listItems[i].style.fontSize="28px";
// }

// var ull = document.getElementsByTagName('ul');
// console.log(ull);

//querySelector: =>

// var ii = document.querySelector('li');
// console.log(ii);

//querySelectorAll: =>

// var ii = document.querySelectorAll('#list');
// console.log(ii);

//if u want to change the content and styles

// var li = document.getElementsByTagName('li');
// li[0].style.color='red';
// li[1].innerHTML = 'Orange';
// li[1].style.backgroundColor = "blue";
// li[2].style.color="white";
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='purple';
// }

//if u want to get the parentNode and parentElement

// var li = document.querySelector('ul');
// console.log(li.parentNode);
// console.log(li.parentElement);

//childNode and ChildElement:=>

// var ul=document.querySelector('#list');
// // console.log(ul.childNodes);
// // console.log(ul.children[1]);
// // console.log(ul.children[2]);
// //previousElementSibling: means that gives the complete element with entire tag.
// console.log(ul.previousElementSibling)
// //previousSibling: means that gives us only type eg: type='text' that text it gives the output
// console.log(ul.previousSibling);

var para = document.createElement('p');
var node = document.createTextNode("this is the first note");
console.log(para.appendChild(node));
// console.log(para.append(node));
console.log(para);