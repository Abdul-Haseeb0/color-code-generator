var get = () => {

    var randomNumber = Math.floor(Math.random()*16777215);
    var randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode
    document.getElementById('para').innerText = randomCode
}
document.getElementById('btn').addEventListener("click" , get);
get()