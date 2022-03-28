// web elements
const imgContHtml = document.getElementById('image-container');

// Global vars
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Element for photos 
function displayphotos(){
    imagesLoaded = 0;
    totalImages = photosArray.length;
    photosArray.forEach(element =>  {
        const photoE = document.createElement('img');
        photoE.setAttribute('class', 'img-size');
        photoE.setAttribute('src', element);
        imgContHtml.appendChild(photoE);

        // Finish loading
        photoE.addEventListener('load', imageLoaded);

    });
}

// Checkea imgs
function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
    }
}

// Api function
async function getPhotos(){
    try{
        const apiKey = 'gxlvZo3lrnc6RF-FTGaw79Mr1FerpBJd1o5q_QjIETM';
        const count = '10';
        const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        data.forEach(element => photosArray.push(element.urls.full));
        displayphotos();
 
    }catch(error){
        console.log(error);
    }

}

// Scroll event
window.addEventListener('scroll', () => {
    console.log(window.scrollY, " ", document.body.offsetHeight - 1000 );
    if(window.scrollY >= document.body.offsetHeight - 1000 && ready){
        getPhotos();
    }
});

// OnInit
getPhotos();