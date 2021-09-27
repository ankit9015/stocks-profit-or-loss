const initialPrice = document.querySelector("#initial-price");
const stocksQuatity =document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const showButton = document.querySelector("#show-button");
const outputMessage = document.querySelector("#output-message");

function calculateProfitOrLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/(initial*quantity)) * 100;
        outputMessage.innerText = `You're makig a loss of Rs. ${loss} and the loss percentage is ${lossPercentage.toFixed(2)}%.`;
    } else if (initial < current) {
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/(current*quantity)) * 100;
        outputMessage.innerText = `You're makig a profit of Rs. ${profit} and the profit percentage is ${profitPercentage.toFixed(2)}%.`;
    } else {
        outputMessage.innerText = `You're neither making loss nor profit.`;
    }
}

// calculateProfitOrLoss(100, 10, 10);
// calculateProfitOrLoss(10, 10, 100);

function clickHandler() {
    const initial = Number(initialPrice.value);
    const current = Number(currentPrice.value);
    const quantity = Number(stocksQuatity.value);

    if(initial && current && quantity){
        calculateProfitOrLoss(initial, quantity, current);
    } else {
        alert('Please fill out all Fields');
    }
    

}


showButton.addEventListener("click", clickHandler);