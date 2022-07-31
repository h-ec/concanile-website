let seconds = 5 + 1;
let bool = true;

if(bool)
{
    setInterval(() => {
        seconds -= 1;
        document.getElementById("h1").innerHTML = `Redirecting in ${seconds} seconds.`;
        if(seconds == 1)
        {
            document.getElementById("h1").innerHTML = `Redirecting in ${seconds} second.`;
        }
    
        if(seconds == 0)
        {
            document.getElementById("h1").innerHTML = `Redirecting in 0 second.`;
            setTimeout(() => {
                window.location = "https://discord.gg/gJQyfQQSX3";
            }, 256);
        }
    }, 1000);
}