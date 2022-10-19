
var form=document.getElementById("form");
var list=document.getElementById("list");

form.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log(e.type);
   var item = document.getElementById("newElement").value;
//    console.log(item);
   var listy = document.createElement("li");
   listy.className="list-group-item";
   listy.innerHTML=item;

   var button = document.createElement("button");
   button.className="btn btn-danger float-end";
   button.innerHTML="&times";

   listy.appendChild(button);
   list.appendChild(listy);
});

//remove event

list.addEventListener("click", function(e){
    // console.log(e.type);
    if(e.target.classList.contains("btn")){
        var li=e.target.parentElement;
        // console.log(li);
        list.removeChild(li);
    }
})