const boxid=document.getElementById("boxid");
const newitem=document.getElementById("newitem");
function additem(){
    if(boxid.value===""){
        alert("any item is not entering");
    }
    else{
        var li=document.createElement("li");
        li.innerHTML=boxid.value;
        newitem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\&#xf1f8;";
    li.appendChild(span);
  }
  inputBox.value = "";
}
newitem.addEventListener("click",function(e){
    if(e.target.tagName="li"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "span") {
        e.target.parentElement.remove();
      }
    },
false);