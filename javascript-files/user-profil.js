function userProfil(p) {
    document.getElementById('user-profil').classList.add('d-show');
    let profil = document.getElementById('user-profil');
    profil.innerHTML = ``;

    profil.innerHTML = htmlTemplateProfil(p);
}

function htmlTemplateProfil(p) {
    let userProfil = posts[p];
    return /*html */ `
        <div class="user-profil-container">
        <img src="img/icons/backarrow-spider.png" class="back-button" onclick="closeUserProfil()">
            <div class="user-profil">
                <img src="${userProfil['user-image']}" class="user-profil-image">
                <div class="user-profil-data">
                    <div class="data-stage1">
                        <span class="user-profil-name"><b>${userProfil['user-id']}</b></span>
                        <button class="follow-button font-slobo" onclick="followMe(${p})"><strong>${userProfil['follow-button']}</strong></button>
                        <button class="send-message-button font-slobo" onclick="sendMessage(${p})"><strong>Nachricht Senden</strong></button>
                        <button class="add-frend-button" id="add-me" onclick="addMe(${p})">${userProfil['add-frend-button']}</button>
                    </div>
                    <div class="data-stage2">
                        <span>${userProfil['contributions']} <b>Beiträge</b></span>
                        <span>${userProfil['follower']} <b>Follower</b></span>
                        <span>${userProfil['subscribers']} <b>Abonnenten</b></span>
                    </div>
                    <div class="data-stage3">
                        <span class="user-info-name"><b>${userProfil['user-id']}</b></span>
                        <span class="user-info-motto">Motto → ${userProfil['motto']}</span>
                        <span class="user-info"><b>Website</b></span>
                        <a class="user-info-website" href="${userProfil['website']}">${userProfil['website-name']}</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function followMe(p) {
    let profil = posts[p];
    
    if (profil['follow'] == false) {
        profil['follow-button'] = "Gefolgt";
        profil['follower'] += 1;
        profil['follow'] = true;
        userProfil(p);
        savePostsTo(p);
    }
    else {
        profil['follow-button'] = "Folgen";
        profil['follower'] -= 1;
        profil['follow'] = false;
        userProfil(p);
        savePostsTo(p);
    }
}

function addMe(p) {
    let addUser = posts[p];

    if (addUser['add-frend'] == false) {
        addUser['add-frend-button'] = '&#10004;';
        addUser['add-frend'] = true;
        userProfil(p);
        savePostsTo(p);
    }
    else {
        addUser['add-frend-button'] = '&#43;';
        addUser['add-frend'] = false;
        userProfil(p);
        savePostsTo(p);
    }
}

function closeUserProfil() {
    document.getElementById('user-profil').classList.remove('d-show'); 
}