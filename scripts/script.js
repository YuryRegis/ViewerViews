function aguarde(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getDirSrc(src) {
    return src.split('/images')[0];
}

async function alternaStream(tempo) {

    let contador = document.getElementById('contador'),
        imgSrc   = document.getElementById('icone');
    
    const dirImage = await getDirSrc(imgSrc.src),
          twtViews = 39,
          ytbViews = 27,
          fcbViews = 09;

    contador.innerHTML = ytbViews;
    imgSrc.src         = dirImage + "/images/youtube.svg"; 
    await aguarde(tempo)
        .then(async proximo => {
            contador.innerHTML = twtViews;
            imgSrc.src         = dirImage + "/images/twitch.svg";
            await aguarde(tempo)
                .then(async proximo => {
                    contador.innerHTML = fcbViews;
                    imgSrc.src         = dirImage + "/images/facebook.png";
                    await aguarde(tempo);
            });
    });
    
    alternaStream(1000);
}