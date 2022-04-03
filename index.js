const washBtn = document.getElementById("wash")
const mowBtn = document.getElementById("Mow")
const weedBtn = document.getElementById("Weeds")
const sendBtn = document.getElementById("send-invoice")

//Wash button >> event litener1
let totalWashAmount = document.getElementById("wash").value;
let taskWashAmount = document.getElementById("wash").name
//Mow button >> event litener2
let totalMowAmount = document.getElementById("Mow").value;
let taskMowAmount = document.getElementById("Mow").name
//Weed button >> event litener3
let totalWeedAmount = document.getElementById("Weeds").value;
let taskWeedAmount = document.getElementById("Weeds").name

// total amount bottom
let totalAmount = document.getElementById("total-dollar")



washBtn.addEventListener("click", function() {
    document.getElementById("task-wash-task").innerHTML = taskWashAmount;
    document.getElementById("total-wash").innerHTML = totalWashAmount;
    totalAmount.innerHTML = "$10"

})

mowBtn.addEventListener("click", function() {
    document.getElementById("task-mow-task").innerHTML = taskMowAmount;
    document.getElementById("total-mow").innerHTML = totalMowAmount;
    totalAmount.innerHTML = "$30"
})

weedBtn.addEventListener("click", function() {
    document.getElementById("task-weeds-task").innerHTML = taskWeedAmount
    document.getElementById("total-weeds").innerHTML = totalWeedAmount;
    totalAmount.innerHTML = "$60"
})

sendBtn.addEventListener("click", function() {
    sendBtn.innerHTML = "<span style='color:white'>EMAIL SENT</span>";
    
})



