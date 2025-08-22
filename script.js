// Login Button Function

document.getElementById("loginButton").addEventListener("click", function(e) {
    e.preventDefault()
    console.log("login button clicked");
    const mobileNumber = 01641108312
    const pinNumber = 1234
    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt (mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt (pinNumberValue)

    console.log(mobileNumberValueConverted, pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
        window.location.href="./home.html"
        console.log("All values matched")
    }
    else {
        console.log("Invalid Credentials")
    }
})