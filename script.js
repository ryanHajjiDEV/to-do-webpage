const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("A response is required!") // IN. left blank

  } else {

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; 
    li.appendChild(span);
     // this code adds the task typed into the input and appends it to the li. Ie. It adds it to the body underneath the input box.

  }

  inputBox.value = '';
  saveData(); // might not work
}

listContainer.addEventListener("click", function(e){
  if (e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }

}, false);

// code from line 22-29 checks if the cursor has clicked the circle. If so, then it toggles the checked icon on. Else if the click target is the span, then we remove it because that is the cross. 

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getData();