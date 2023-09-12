debugger;
window.onload = function () {
    pageShow();
    // checkStorage();
};
// Event listener for storing Data
document.querySelector(".save-btn").addEventListener('click', storeLinkData);

function pageShow() {
    debugger;
    const linksPage = document.querySelector("#links-page");
    const profilePage = document.querySelector("#profile-page");
    const linksBtn = document.querySelector(".link-btn");
    const profileBtn = document.querySelector(".profile-btn");


    linksBtn.addEventListener('click', () => {
        linksPage.style.display = "block";
        profilePage.style.display = "none";
        linksBtn.classList.add("active-color");
        profileBtn.classList.remove("active-color");

    });
    profileBtn.addEventListener('click', () => {
        profilePage.style.display = "block";
        linksPage.style.display = "none";
        profileBtn.classList.add("active-color");
        linksBtn.classList.remove("active-color");
    });
}

function addLinks() {
    let addLinkbtn = document.querySelector(".link-add-btn");
    let linkDiv = document.querySelector(".new-link");

    addLinkbtn.addEventListener('click', () => {

    });
}

    

function storeLinkData() {
    debugger;
    let currentIdCounter = parseInt(localStorage.getItem('currentIdCounter')) || 1;
    let platformList = document.getElementById("platform");
    let inputLink = document.getElementById("link-input");
    

    const dataLink = {
        platform: platformList.value,
        link: inputLink.value
    };

    let tempArray = JSON.parse(localStorage.getItem("Data"));

    let finalArray = tempArray ? tempArray : [];
    finalArray.push(dataLink);

    localStorage.setItem("Data", JSON.stringify(finalArray));
}

function storePersonalData() {
    let fName = document.getElementById("firstname");
    let lName = document.getElementById("lastname");
    let email = document.getElementById("mail");

    const dataPersonal = {
        first_name : fName.value,
        last_name : lName.value,
        mail : email.value
    };
}

function checkStorage() {
    let arrayCheck = JSON.parse(localStorage.getItem("Data"));
    let updateArray = arrayCheck ? arrayCheck : [];

    if (updateArray.length > 0) {
        showData(updateArray);
    }
}

function showData(storageData){

}