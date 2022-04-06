// Const
const buttonHTMl = document.getElementById("audio");
const audioElement = document.getElementById("audioctrl");
const languageHTML = document.getElementById("language");
const VoiceRSS = {speech(e){this._validate(e),this._request(e)},_validate(e){if(!e)throw"The settings are undefined";if(!e.key)throw"The API key is undefined";if(!e.src)throw"The text is undefined";if(!e.hl)throw"The language is undefined";if(e.c&&"auto"!=e.c.toLowerCase()){let a=!1;switch(e.c.toLowerCase()){case"mp3":a=(new Audio).canPlayType("audio/mpeg").replace("no","");break;case"wav":a=(new Audio).canPlayType("audio/wav").replace("no","");break;case"aac":a=(new Audio).canPlayType("audio/aac").replace("no","");break;case"ogg":a=(new Audio).canPlayType("audio/ogg").replace("no","");break;case"caf":a=(new Audio).canPlayType("audio/x-caf").replace("no","")}if(!a)throw`The browser does not support the audio codec ${e.c}`}},_request(e){const a=this._buildRequest(e),t=this._getXHR();t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){if(0==t.responseText.indexOf("ERROR"))throw t.responseText;let e=t.responseText;audioElement.src=e,audioElement.onloadedmetadata=(()=>{audioElement.play()})}},t.open("POST","https://api.voicerss.org/",!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),t.send(a)},_buildRequest(e){const a=e.c&&"auto"!=e.c.toLowerCase()?e.c:this._detectCodec();return`key=${e.key||""}&src=${e.src||""}&hl=${e.hl||""}&r=${e.r||""}&c=${a||""}&f=${e.f||""}&ssml=${e.ssml||""}&b64=true`},_detectCodec(){const e=new Audio;return e.canPlayType("audio/mpeg").replace("no","")?"mp3":e.canPlayType("audio/wav").replace("no","")?"wav":e.canPlayType("audio/aac").replace("no","")?"aac":e.canPlayType("audio/ogg").replace("no","")?"ogg":e.canPlayType("audio/x-caf").replace("no","")?"caf":""},_getXHR(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw"The browser does not support HTTP request"}};

// Vars 
var languageAudio = 'en-us'; // en-us es-mx
var languageJoke = 'en';

async function getJoke(){
    const apiUrl = `https://v2.jokeapi.dev/joke/Any?format=json&lang=${languageJoke}`;
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        const joke = getObjJoke(data);

        getAudio(joke);
    }catch(error){
        console.log(error);
    }
}

function getObjJoke(data){
    if(data.setup && data.delivery){
        return data.setup + " " + data.delivery;
    }else if(data.joke){
        return data.joke;
    }
}

function getAudio(Joke){
    const ApiKey = '7f9c8f61872f42539737ade1947152d6';

    VoiceRSS.speech({
        key: ApiKey,
        src: Joke,
        hl: languageAudio,
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

function changeLanguage(){
    if(languageAudio === 'en-us'){
        buttonHTMl.innerHTML = "<i class='fa-solid fa-face-grin-tongue-wink'></i> Dime una broma !";
        languageHTML.innerHTML = "<i class='fa-solid fa-language'></i> Cambiar Idioma !";
        languageAudio = 'es-mx';
        languageJoke = 'es';

    }else if(languageAudio === 'es-mx'){
        buttonHTMl.innerHTML = "<i class='fa-solid fa-face-grin-tongue-wink'></i> Tell me a Joke !";
        languageHTML.innerHTML = "<i class='fa-solid fa-language'></i> Change Language !";
        languageAudio = 'en-us';
        languageJoke = 'en';
    }
}

buttonHTMl.addEventListener("click", getJoke);
languageHTML.addEventListener("click", changeLanguage);