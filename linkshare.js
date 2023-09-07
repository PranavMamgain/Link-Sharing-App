debugger;
window.onload = function () {
    pageShow();
    debugger;
};

function pageShow() {
    debugger;
    const linksPage = document.querySelector("#links-page");
    const profilePage = document.querySelector("#profile-page");
    const linksBtn = document.querySelector(".link-btn");
    const profileBtn = document.querySelector(".profile-btn");

    linksBtn.addEventListener('click', () => {
        linksPage.style.display = "block";
        profilePage.style.display = "none";
    });
    profileBtn.addEventListener('click', () => {
        profilePage.style.display = "block";
        linksPage.style.display = "none";
    });
}

function addLinks() {
    let addLinkbtn = document.querySelector(".link-add-btn");
    let linkDiv = document.querySelector(".new-link");

    addLinkbtn.addEventListener('click', ()=>{

    });
}

function storeData() {
    let platformList = document.getElementById("platform");
    let inputLink = document.getElementById("link-input");
    let fName = document.getElementById("firstname");
    let lName = document.getElementById("lastname");
    let email = document.getElementById("mail");

    
}