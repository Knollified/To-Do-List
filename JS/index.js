//Storage
const html = (todo, index) => {
  return `<div class="List-Item" id=${index}>
<div class="Item-Text">
    <h2 id="H2${index}">${todo}</h2>
</div>
<div class="Item-Buttons">
    <button  id="${index}" class="Delete-Button" type="button" onclick="OnDelete(event)">Delete</button>
    <label class="labelClass" >Complete </label>
        <input type="checkbox" id="${index}"  name="Complete" onchange="CheckBox(this)">
    
</div>
</div>`;
};
const ListOfToDos = [];
let CurrentToDo = "";
//Dom Targets
const InputBox = document.getElementById("input_box");
const ListContainer = document.getElementById("ListContainer");
const Head = document.getElementById("head");
// Event Handler
const InputboxHandler = (e) => {
  CurrentToDo = e.target.value;
};
//Event Listener
InputBox.addEventListener("input", InputboxHandler);

//Update Values
const DeleteFromDom = (id) => {
  let node = document.getElementById(`${id}`).parentNode;
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
};
const OnCreate = (e) => {
  // Stop the reload
  e.preventDefault();
  //add the item to the array
  ListOfToDos.push(CurrentToDo);
  //create a new div
  const ToDoItem = document.createElement("div");
  // Loop trough every item
  ListOfToDos.forEach((todo, index) => {
    ToDoItem.innerHTML = html(todo, index);
    //append the div to the list container
    ListContainer.appendChild(ToDoItem);
  });
  InputBox.value = "";
  console.log(ListOfToDos);
};

const OnDelete = (e) => {
  const id = e.target.id;
  ListOfToDos.splice(id, 1);
  console.log(ListOfToDos);
  DeleteFromDom(id);
};

const CheckBox = (e) => {
  const id = e.id;
  const checked = e.checked;
  if (checked) {
    // set value

    document.getElementById(`H2${id}`).style.textDecoration = "line-through";
  } else {
    document.getElementById(`H2${id}`).style.textDecoration = "none";
  }
};
