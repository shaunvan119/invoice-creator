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

let count = 0;
let listItem;






washBtn.addEventListener("click", function() {
    render(taskList[0]);
    //document.getElementById("task-wash-task").innerHTML = taskWashAmount;
    //document.getElementById("total-wash").innerHTML = totalWashAmount;
    //totalAmount.innerHTML = "$10"

})

mowBtn.addEventListener("click", function() {
    //document.getElementById("task-mow-task").innerHTML = taskMowAmount;
    //document.getElementById("total-mow").innerHTML = totalMowAmount;
    //totalAmount.innerHTML = "$30"
    render(taskList[1]);
})

weedBtn.addEventListener("click", function() {
    //document.getElementById("task-weeds-task").innerHTML = taskWeedAmount
    //document.getElementById("total-weeds").innerHTML = totalWeedAmount;
    //totalAmount.innerHTML = "$60"
    render(taskList[2]);
})

sendBtn.addEventListener("click", function() {
    sendBtn.innerHTML = "<span style='color:white'>EMAIL SENT</span>";
    
})


function render(item) {
    // Total cost stays updated
    count += item.price;
    listItem = document.createElement("li");
    listItem.innerHTML =
        `<p id="task" id="${item.id}">
        <span class="task-name">${item.task}</span>
        <span class="task-price">$${item.price}</span>
    `;
    //console.log(listItem)
    listSection.appendChild(listItem);
    // Total cost stays updated
    totalAmount.textContent = `$${count}`;
    // Don't charge more than once for the same task
    if (item.task === "mow lawn") {
        mowBtn.disabled = true;
    }
    if (item.task === "wash Car") {
        washBtn.disabled = true;
    }
    if (item.task === "pull weeds") {
        weedBtn.disabled = true;
    }
}








