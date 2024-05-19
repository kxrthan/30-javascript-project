const inputBox = document.getElementById("input-box");
const listContianer = document.getElementById("list-contianer");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContianer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

}
listContianer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    }
}, false);

function saveData(){
    localStorage.setItem("data",listContianer.innerHTML);
}

function showTask(){
    listContianer.innerHTML = localStorage.getItem("data");
}
showTask();