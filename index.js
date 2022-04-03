const washBtn = document.getElementById("wash")
const mowBtn = document.getElementById("Mow")
const weedBtn = document.getElementById("Weeds")
const sendBtn = document.getElementById("send-invoice")

let totalWashAmount = document.getElementById("wash").value;
let taskWashAmount = document.getElementById("wash").name
let totalMowAmount = document.getElementById("Mow").value;
let taskMowAmount = document.getElementById("Mow").name
let totalWeedAmount = document.getElementById("Weeds").value;
let taskWeedAmount = document.getElementById("Weeds").name




washBtn.addEventListener("click", function() {
    document.getElementById("task-wash-task").innerHTML = taskWashAmount;
    document.getElementById("total-wash").innerHTML = totalWashAmount;
})

mowBtn.addEventListener("click", function() {
    document.getElementById("task-mow-task").innerHTML = taskMowAmount;
    document.getElementById("total-mow").innerHTML = totalMowAmount;
    
})

weedBtn.addEventListener("click", function() {
    document.getElementById("task-weeds-task").innerHTML = taskWeedAmount
    document.getElementById("total-weeds").innerHTML = totalWeedAmount;
})

sendBtn.addEventListener("click", function() {
    sendBtn.innerHTML = "<span style='color:white'>EMAIL SENT</span>";
})



