function openReels() {
    let reels = document.getElementById('reels');

    reels.innerHTML = /*html */ `
        <div class="reels-bg" id="reel"></div>
    `;
    aktivReels();
}

function aktivReels() {
    let reelContent = document.getElementById('reel');
    reelContent.innerHTML = ``;

    for (let r = 0; r < reels.length; r+=1) {
        const reel = reels[r];
        
        reelContent.innerHTML += htmlTemplateReel(reel);
    }
}

function htmlTemplateReel(reel) {
    return /*html */ `
    <h2 class="onwork">An diesem Bereich wird noch gearbeitet. Wir bitten um dein Verständnis.</h2>
        <div class="reel">
            <iframe class="reel-video" src="${reel['reel-video']}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <div class="reel-content">
                <div class="reel-user-id">
                    <img class="reel-user-image" src="${reel['user-image']}" alt="">
                    <span class="reel-user-name">${reel['user-name']}</span>
                    <span class="reel-user-location">aus <b>${reel['user-location']}</b></span>
                </div>
                <div class="reel-txt-container">
                    <span class="reel-txt">${reel['reel-txt']}</span>
                </div>
            </div>
        </div>
    `;
}