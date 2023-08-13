function openPosts() {
    let posts = document.getElementById('posts');

    posts.innerHTML = /*html */ `
        <div class="posts-bg" id="post"></div>
    `;
    aktivPosts();
}

function aktivPosts() {
    let postContent = document.getElementById('post');
    postContent.innerHTML = ``;

    for (let p = 0; p < posts.length; p+=1) {
        const post = posts[p];

        postContent.innerHTML += htmlTemplatePost(post, p);
    }
}

function htmlTemplatePost(post, p) {
    return /*html */ `
        <div class="post">
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
            <div class="post-message">
                <div class="icon-container">
                    <div class="like-bar">
                        <img src="${post['postlike-image']}" alt="" class="like-bar-icons" id="like-button" onclick="likePost(posts[${p}])">
                        <img src="img/icons/speech-bubble.png" alt="" class="like-bar-icons" onclick="commentPost(${p})">
                        <img src="img/icons/paper-plane-black-64.png" alt="" class="like-bar-icons" onclick="openPostMenu()">
                    </div>
                    <img src="${post['bookmark']}" alt="" class="notice" onclick="bookMark(posts[${p}])">
                </div>
                <div class="likes-counter">
                    <span class="likes">${post['likes']}</span><span class="likes-txt">likes</span>
                </div>
                <div class="message">
                    <span class="message-txt">${post['message-txt']}</span>
                </div>
            </div>
        </div>
    `;
}

function openPostMenu(PostMenu) {
    document.getElementById('post-menu').classList.add('d-show');
    let postMenu = document.getElementById('post-menu');
    postMenu.innerHTML = ``;

    postMenu.innerHTML = htmlTemplatePostMenu(PostMenu);
}

function htmlTemplatePostMenu(PostMenu) {
    return /*html */ `
        <div class="post-menu-container">
        <img src="img/icons/backarrow-spider.png" class="back-button" onclick="closePostMenu()">
            <span class="post-menu-text">An diesem Bereich wird noch gearbeitet.<br>Wir bitten um dein Verständnis.</span>
        </div>
    `;
}

function openPostImage(image) {
    document.getElementById('post-image').classList.add('d-show');
    document.getElementById('post-image').innerHTML = /*html */ `
        <img src="img/icons/backarrow-spider.png" class="back-button" onclick="closeImage()">
        <img src="${posts[image]['post-image']}" class="image">
    `;
}

function likePost(newLike) {
    
    if (newLike['postlike'] == false) {
        newLike['postlike-image'] = "img/icons/heart-red.png";
        newLike['likes'] += 1;
        newLike['postlike'] = true;
        aktivPosts();
        savePostsTo();
    }
    else {
        newLike['postlike-image'] = "img/icons/heart-64.png";
        newLike['likes'] -= 1;
        newLike['postlike'] = false;
        aktivPosts();
        savePostsTo();
    }
}

function bookMark(market) {
    
    if (market['bookmarket'] == false) {
        market['bookmark'] = "img/icons/bookmark-filed.png";
        market['bookmarket'] = true;
        aktivPosts();
        savePostsTo();
    }
    else {
        market['bookmark'] = "img/icons/bookmark-3-64.png";
        market['bookmarket'] = false;
        aktivPosts();
        savePostsTo();
    }
}

function closePostMenu() {
    document.getElementById('post-menu').classList.remove('d-show');
}

function closeImage() {
    document.getElementById('post-image').classList.remove('d-show');
}

function savePostsTo() {
    let postsToText = JSON.stringify(posts);
    localStorage.setItem('posts', postsToText);
}

function loadPostsFrom() {
    let postsToText = localStorage.getItem('posts');
    if (postsToText != null) {
        posts = JSON.parse(postsToText);
    }
    aktivPosts();
}