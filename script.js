let userFirstname = prompt("Comment t'appelles tu ?")

function sayHello(firstname, hour)
{
    if (hour >= 18)
    {let message = `Bonsoir ${firstname}!`
    document.querySelector('h1').innerText = message}
    else
    {let message = `Bonjour ${firstname}!`
    document.querySelector('h1').innerText = message}
}

sayHello(userFirstname, 17);


