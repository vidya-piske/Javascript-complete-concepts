//e.preventDefault: whenever we click on submit button the form shouldn't be submitted!
//classList: collection of elements inside the class
//contains: whether the item contains or not

var form = document.getElementById("addform");
var listItem=document.getElementById("list");
form.addEventListener("submit",function(e){
    e.preventDefault();
    var newItem=document.getElementById("item").value;
    var li=document.createElement("li");
    li.className="list-group-item";
    li.innerHTML=newItem;
    var button=document.createElement('button');
    button.className="btn btn-danger float-end";
    button.innerHTML="&times;";
    li.appendChild(button);
    listItem.appendChild(li);
});

//remove

listItem.addEventListener("click", function(e){
    // console.log(e.target);
    if(e.target.classList.contains('btn')){
        var li=e.target.parentElement;
        listItem.removeChild(li);
    }

})
