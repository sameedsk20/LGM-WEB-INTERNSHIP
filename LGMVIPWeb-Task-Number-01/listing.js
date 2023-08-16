const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask(){
    if(inputBox.value === ''){
        alert("Enter something to add...");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    storingData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storingData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storingData();
    }
},false);

function storingData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayData();