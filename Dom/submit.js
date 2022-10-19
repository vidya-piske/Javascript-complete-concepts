var form=document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var result=a + '<br/> ' +b;
    document.getElementById('span').innerHTML=result;
    console.log(e.type);   
});