function openDiscover() {
    let discover = document.getElementById('discover-zone');

    discover.innerHTML = /*html */ `
        <div class="discover-bg" id="discover"></div>   
    `;
    aktivDiscover();
}

function aktivDiscover() {
    let discoverContent = document.getElementById('discover');
    discoverContent.innerHTML = htmlTemplateDiscover();    
}

function htmlTemplateDiscover() {
    return /*html */ `
        <div class="discover">
            <h2 class="onwork">An diesem Bereich wird noch gearbeitet. Wir bitten um dein Verständnis.</h2>
            <div class="discover-level1">
                <div class="discover-level2">
                    <div class="discover-level3">
                        <img class="discover-image-lvl3" src="img/discover/SAO4.jpg" alt="">
                    </div>
                    <div class="discover-level3">
                        <img class="discover-image-lvl3" src="img/discover/SAO2.jpeg" alt="">
                    </div>
                </div>
                <div class="discover-level2">
                    <div class="discover-level3">
                        <img class="discover-image-lvl3" src="img/discover/SAO5.jpeg" alt="">
                    </div>
                    <div class="discover-level3">
                        <img class="discover-image-lvl3" src="img/discover/SAO3.png" alt="">
                    </div>
                </div>
                <div class="discover-level2">
                    <img class="discover-image-lvl2" src="img/discover/SAO1.jpg" alt="">
                </div>
            </div>
            <div class="discover-level1">
                <div class="discover-level2">
                    <img class="discover-image-lvl2" src="img/discover/SAO1.jpg" alt="">
                </div>
                <div class="discover-level2">
                    <div class="discover-level3">
                        <img class="discover-image-lvl3" src="img/discover/SAO3.png" alt="">
                    </div>
                    <div class="discover-level3">
                       <img class="discover-image-lvl3" src="img/discover/SAO5.jpeg" alt="">
                    </div>
                </div>
                <div class="discover-level2">
                    <div class="discover-level3">
                        <img class="discover-image-lvl3" src="img/discover/SAO2.jpeg" alt="">
                    </div>
                    <div class="discover-level3">
                        <img class="discover-image-lvl3" src="img/discover/SAO4.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    `;    
}