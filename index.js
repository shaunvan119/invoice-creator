const washBtn = document.getElementById("wash")
const mowBtn = document.getElementById("mow")
const weedBtn = document.getElementById("Weeds")
const sendBtn = document.getElementById("send-invoice")

let listSection = document.getElementById("list-section")
let totalAmount = document.getElementById("total-dollar")

//Wash button >> event litener1
//let totalWashAmount = document.getElementById("wash").value;
//let taskWashAmount = document.getElementById("wash").name
//Mow button >> event litener2
//let totalMowAmount = document.getElementById("Mow").value;
//let taskMowAmount = document.getElementById("Mow").name
//Weed button >> event litener3
//let totalWeedAmount = document.getElementById("Weeds").value;
//let taskWeedAmount = document.getElementById("Weeds").name

// total amount bottom


//Array of the list items to be rendered on the page
let taskList = [{
        id: 0,
        task: "Wash car",
        price: 10
    },
    {
        id: 1,
        task: "Mow lawn",
        price: 20
    },
    {
        id: 2,
        task: "Pull weeds",
        price: 30
    },
];

//setting the count to zero for the price 
let count = 0;
let listItem;





// button event listeners
washBtn.addEventListener("click", function() {
    render(taskList[0]); // render function and accessing index ID 0 with in task list
})

mowBtn.addEventListener("click", function() {
    render(taskList[1]);
})

weedBtn.addEventListener("click", function() {
    render(taskList[2]);
})

sendBtn.addEventListener("click", function() {
    sendBtn.innerHTML = "<span style='color:white'>EMAIL SENT</span>";
    
})

// function the renders the task list to the page using template literals
function render(item) {
    
    count += item.price; // adding the total price which is stored in the total amount varible
    listItem = document.createElement("li"); // creating a html element and storing it in the list item varible
    listItem.innerHTML =
        `<p id="task" id="${item.id}">
        <span class="task-name">${item.task}</span>
        <span class="task-price">$${item.price}</span>
    `;
    //appending items to the list section
    listSection.appendChild(listItem);
    // taking the above count varible and rendering to the totalAmount
    totalAmount.textContent = `$${count}`;
    

}








