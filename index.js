const washBtn = document.getElementById("wash")
const mowBtn = document.getElementById("Mow")
const weedBtn = document.getElementById("Weeds")
const sendBtn = document.getElementById("send-invoice")



//function washFunction() {
    //let totalWashAmount = document.getElementById("wash").value;
   // document.getElementById("total-wash").innerHTML = totalWashAmount;
//}

washBtn.addEventListener("click", function() {
    let totalWashAmount = document.getElementById("wash").value;
    document.getElementById("total-wash").innerHTML = totalWashAmount;
})

mowBtn.addEventListener("click", function() {
    console.log("click")
})

weedBtn.addEventListener("click", function() {
    console.log("click")
})

sendBtn.addEventListener("click", function() {
    sendBtn.innerHTML = "<span style='color:white'>EMAIL SENT</span>";
})



