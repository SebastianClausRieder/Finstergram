function commentPost(p) {
    document.getElementById('comments-container').classList.add('d-show');
    let post = posts[p];
    let comments = document.getElementById('comments-container');
    comments.innerHTML = ``;
    comments.innerHTML = htmlTemplateComments(p);


    for (let c = 0; c < post['comments'].length; c+=1) {
        const comment = post['comments'][c];
        document.getElementById('all-comments').innerHTML += /*html */ `
            <div class="comment">${comment}</div>
        `;
    }
}

function htmlTemplateComments(p) {
    let post = posts[p];
    return /*html */ `
        <div class="comments-container">
        <img src="img/icons/backarrow-spider.png" class="back-button" onclick="closeComments()">
            <div class="post-title">
                <div class="title-container">
                    <div class="post-user-id" onclick="userProfil(${p})">
                        <img src="${post['user-image']}" class="user-id-image">
                        <h3 class="user-id">${post['user-id']}</h3>
                    </div>
                    <img src="img/icons/3-punkte-spiders.png" class="post-menu-button" onclick="openPostMenu(posts[${p}])">
                </div>
            </div>
            <div class="image-container">
                <img src="${post['post-image']}" class="post-image" onclick="openPostImage(${p})">
            </div>
            <div class="comment-area font-slobo">
                <div class="input-container">
                    <textarea type="text" id="comment-text" class="input-fild font-slobo" placeholder="Gib einen Kommentar ab..."></textarea>
                    <button class="post-comment font-rubik-burned" onclick="postIt(${p})"><img src="img/icons/cobwebs/Originale/004-pumpkin.png" alt="" class="post-icon"><b>Post</b><img src="img/icons/cobwebs/Originale/006-pumpkin-1.png" alt="" class="post-icon"></button>
                </div>
                <div class="comments" id="all-comments"></div>
            </div>
        </div>
    `;
}

function postIt(p) {
    let post = posts[p];
    let newPost = document.getElementById('comment-text').value;

    if (newPost != "") {
        post['comments'].push(newPost);
        commentPost(p);
        savePostsTo();
    }
    else {
        alert('Bitte Ausfüllen')
    }
}

function closeComments() {
    document.getElementById('comments-container').classList.remove('d-show'); 
}