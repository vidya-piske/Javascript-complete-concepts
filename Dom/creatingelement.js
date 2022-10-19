//creatingelement using javascript

var div = document.createElement('h1');
console.log(div);
div.innerHTML='vidya piske';
div.style.color="red";
div.setAttribute('title','im heading');

var headingText=document.createTextNode('This is my heading!');
div.appendChild(headingText);

//removing element when we click on it
var rem = document.querySelector('h1');
rem.remove();