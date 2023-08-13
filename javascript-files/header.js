function openSearch() {
    document.getElementById('navbar').classList.remove('d-show');
    let searchFild = document.getElementById('search');

    if (closeSearch == false) {
        searchFild.style = 'transform: translateY(-250%)';
        closeSearch = true;
    }
    else {
        searchFild.style = 'transform: translateY(0%)';
        closeSearch = false;
    }
    openPostMenu();
}

function home() {
    openPosts();
    openProfil();
}

function openProfil() {
    document.getElementById('navbar').classList.remove('d-show');
    document.getElementById('p-container').classList.add('profil-width');
    document.getElementById('posts').classList.add('d-none');
    document.getElementById('profil').style = 'transform: translateX(0%)';
    document.getElementById('ia-center').style = 'animation: 225ms fadeIn ease-in-out';
    setTimeout(() => {
        document.getElementById('ia-center').classList.add('ia-center-change');
    }, 225);
}

function closeProfil() {
    document.getElementById('profil').style = 'transform: translateX(100%)';
    document.getElementById('ia-center').style = 'animation: 225ms fadeOut ease-in-out';
    setTimeout(() => {
        document.getElementById('p-container').classList.remove('profil-width');
        document.getElementById('posts').classList.remove('d-none');
        document.getElementById('ia-center').classList.remove('ia-center-change');
    }, 225);
}

function openNavBar() {
    let navBar = document.getElementById('navbar');

    if (closeNavBar == false) {
        navBar.classList.remove('d-show');
        closeNavBar = true;
    }
    else {
        navBar.classList.add('d-show');
        closeNavBar = false;
    }
}