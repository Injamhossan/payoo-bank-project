document.getElementById("add_money_btn").addEventListener("click",function(e) {
    e.preventDefault();
    console.log("Add Money Click")
    const bank = document.getElementById("bank").value
    const bankaccount = document.getElementById("bank_acc").value
    
    const amount = parseInt(document.getElementById("add_amount").value)
    
    const pin = document.getElementById("add_pin").value

    console.log(bank, bankaccount, amount, pin);

    const availableBalance = parseInt(document.getElementById("avaible-balance").innerText)

    console.log(availableBalance)

    const totalNewAvailableBalance = amount + availableBalance

    document.getElementById("avaible-balance").innerText = totalNewAvailableBalance
})  