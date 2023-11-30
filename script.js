const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===""){
        alert("you must add your to do list !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);             /*code to add the list below when add button pressed*/
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";                 /*js for the cross icon in the list */
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){                               /*if we click the list it willbe marked as checked */
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){                      /**if we click on the span that is the cross icon it will remove */
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);     /**this is the function to unchange the site when it refresh */
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();


