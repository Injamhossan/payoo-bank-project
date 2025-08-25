

document.getElementById("add_money_btn").addEventListener("click",function(e) {
    e.preventDefault();
    console.log("Add Money Click")
    const bank = document.getElementById("bank").value
    const bankaccount = document.getElementById("bank_acc").value
    
    const amount = parseInt(document.getElementById("add_amount").value)
    
    const pin = document.getElementById("add_pin").value

    console.log(bank, bankaccount, amount, pin);

    const availableBalance = parseInt(document.getElementById("avaible-balance").innerText)

    if(bankaccount.length<11) {
        alert("Invalid Account Number");
        return;
    }
    // const validPin = 1234
    // if(pin !== validPin){
    //     alert("Wrong Pin");
    //     return;
    // }
    console.log(availableBalance)

    const totalNewAvailableBalance = amount + availableBalance

    document.getElementById("avaible-balance").innerText = totalNewAvailableBalance
})  


document.getElementById("add_money_btn").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display="block"

    document.getElementById("cashout-button").style.display="none"
})
document.getElementById("cash-out-button").addEventListener("click", function(){
    document.getElementById("add-button").style.display="none"

    document.getElementById("cashout-button").style.display="block"
})