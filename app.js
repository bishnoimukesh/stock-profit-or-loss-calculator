var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputText = document.querySelector("#output");

submitBtn.addEventListener("click", submitHandler)

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        outputText.style.display = "block";
        outputText.style.borderRadius = "1rem";
        outputText.style.padding = "10px";
        outputText.style.color = "#f1f2f3";
        outputText.style.border = "3px solid black"
        outputText.style.backgroundColor = "red";
        outputText.innerHTML = `<span>😭</span> The loss is Rs. ${loss.toFixed(2)} and the loss percentage is ${lossPercentage.toFixed(2)} %. <span>😭</span>`;
        // showOutput(`😵 Ohhh the loss is ${loss} and the percentage is ${lossPercentage} %`);
    }else if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        // showOutput(`🤩 Wow  the profit is ${profit} and the percentage is ${profitPercentage} %`);
        outputText.style.display = "block";
        outputText.style.color = "#fff";
        outputText.style.borderRadius = "1rem";
        outputText.style.border = "3px solid black"
        outputText.style.padding = "10px";
        outputText.style.backgroundColor = "green";
        outputText.innerHTML = `<span>😄</span> The profit is Rs. ${profit.toFixed(2)} and the profit percentage is ${profitPercentage.toFixed(2)} %. <span>😄</span>`;
    }else{
        showOutput(`There is No Profit No Loss!!`)
    }
}

function showOutput() {
    output.innerHTML = calculateProfitAndLoss;
}