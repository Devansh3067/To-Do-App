let input = document.querySelector(".input");
let addBtn = document.querySelector(".add-btn");
let lists = document.querySelector(".lists");
let list = document.querySelectorAll("li");
let errorMsg = document.querySelector(".error-message");

addBtn.addEventListener("click",addTask);

let checked = false;

function addTask(){
    let task = input.value;
    if(task == ""){
        errorMsg.style.display = "block";
        // alert("You must write something");
    }
    else{
        errorMsg.style.display = "none";
        let li = document.createElement("li");
        li.innerHTML = task;
        lists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

lists.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("Data", lists.innerHTML);
}
function getData(){
    lists.innerHTML = localStorage.getItem("Data");
}

getData();