const videoHtml = document.getElementById('video-player');
const buttonHtml = document.getElementById('button-pip');
const buttonSHtml = document.getElementById('button-screen');


// Select media and play 
async function SelectScreen(){
    try{
        const MediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoHtml.srcObject = MediaStream;

        videoHtml.onloadedmetadata = () =>{
            videoHtml.play();
        }

    }catch(error){
        //
    }

}

// 
buttonHtml.addEventListener('click', async () => {
    buttonHtml.disabled = true;
    // start PIP
    await videoHtml.requestPictureInPicture();
    // 
    buttonHtml.disabled = false;
 
});

buttonSHtml.addEventListener('click', async () => {
    SelectScreen();
});


