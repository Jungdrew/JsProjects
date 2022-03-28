// Page Elements
const quoteHtml = document.getElementById('quoteText');
const authorHtml = document.getElementById('author');
const loaderHtml = document.getElementById('loader');
const rootHtml = document.getElementById('root-container');

async function getQuote(){
    const ApiUrl = 'https://api.quotable.io/random';
    
    try{
        loading();
        const response = await fetch(ApiUrl);
        const data = await response.json();
        quoteHtml.innerText = data.content;
        authorHtml.innerText = "- " + data.author;

        if(quoteHtml.innerText.length > 50){
            quoteHtml.classList.add('long-quote');
        }else{
            quoteHtml.classList.remove('long-quote');
        }
        completed();

    }catch(error){
        quoteHtml.innerText = "Quote not found";
    }

}

function loading(){
    loaderHtml.style.display = "block";
    rootHtml.style.display = "none";
}

function completed(){
    if(loaderHtml.style.display == "block"){
        loaderHtml.style.display = "none";
        rootHtml.style.display = "flex";
    }
}

function twitterPost(){
    const tweet = `https://twitter.com/intent/tweet?text=${ quoteHtml.innerText } %0a ${ authorHtml.innerText } ` ;
    window.open(tweet);
}

function googleTranslate(){
    const url = `https://translate.google.com/?sl=auto&tl=auto&text=${ quoteHtml.innerText }`;
    window.open(url);
}

// OnInit
getQuote();



