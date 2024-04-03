const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://animechan.xyz/api/random";



async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.quote;
    author.innerHTML = data.character + "--" + data.anime;
}

getQuote(apiUrl);


function tweet(){
window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML, "Tweet Window", "width=600, height=300");
}