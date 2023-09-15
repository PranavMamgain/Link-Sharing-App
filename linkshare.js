debugger;
const addButton = document.querySelector(".link-add-btn");
const linksList = document.querySelector(".links-list");
window.onload = function () {
    pageShow();
    // checkStorage();
    showLinkData();
};

// Event listener 
document.querySelector(".save-btn").addEventListener('click', storeLinkData);
document.querySelector(".save-profile-btn").addEventListener('click', storePersonalData);


document.querySelector(".links-list").addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains("remove-btn")) {
        const divLink = event.target.closest(".new-link");
        if (divLink) {
            const divIndex = Array.from(divLink.parentElement.children).indexOf(divLink);
            console.log(divIndex);
            divLink.remove();
            document.querySelector(".link-add-btn").style.cursor = "pointer";
            removeFromLocalStorage(divIndex);
            removeFromPhoneDisplay(divIndex);
        }
    }
});

document.querySelector(".link-add-btn").addEventListener('click', () => {
    if (document.querySelector(".links-list").childElementCount < 5) {
        // document.querySelector(".link-add-btn").disabled = false;
        createLink();
        // if (document.querySelector(".links-list").childElementCount ==5) {

        // }
    }
    else {
        document.querySelector(".link-add-btn").style.cursor = "not-allowed";
    }
});

document.querySelector("#photo-input").addEventListener('change', imageShow);

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

function storeLinkData() {
    debugger;
    let tempArray = JSON.parse(localStorage.getItem("LinkData"));
    let finalArray = tempArray ? tempArray : [];
    debugger;
    let linkElements = document.querySelectorAll(".new-link");

    linkElements.forEach(element => {
        let platformList = element.querySelector("#platform").value;
        let inputLink = element.querySelector("#link-input").value;

        const dataLink = {
            platform: platformList,
            link: inputLink
        };
        finalArray.push(dataLink);
    });
    localStorage.setItem("LinkData", JSON.stringify(finalArray));
}

function storePersonalData() {
    let fName = document.getElementById("firstname");
    let lName = document.getElementById("lastname");
    let email = document.getElementById("mail");

    const dataPersonal = {
        first_name: fName.value,
        last_name: lName.value,
        mail_id: email.value
    };

    localStorage.setItem("PersonalData", JSON.stringify(dataPersonal));
}

function checkStorage() {
    let arrayCheck = JSON.parse(localStorage.getItem("LinkData"));
    let updateArray = arrayCheck ? arrayCheck : [];

    if (updateArray.length > 0) {
        showData(updateArray);
    }
}

function showLinkData() {
    debugger;
    const getData = JSON.parse(localStorage.getItem("LinkData"));
    let storedData = getData ? getData: [];
    storedData.forEach((boxData) => {
        createLink();
        const boxElements = document.querySelectorAll('.new-link');
        const lastBox = boxElements[boxElements.length - 1];
        // lastBox.querySelector('.header-link span').textContent = boxData.title;
        lastBox.querySelector('#platform').value = boxData.platform;
        lastBox.querySelector('#link-input').value = boxData.link;
    });
}

function createLink() {
    // const ;
    let showList = document.querySelector(".links-list");
    let newLinkElement = document.createElement("div");
    newLinkElement.setAttribute("class", "new-link");

    newLinkElement.innerHTML = `
    <div class="header-link">
                                    <span class="link-no">Link # <li></li></span>
                                    <button class="remove-btn">Remove</button>
                                </div>
                                <div class="input-platform">
                                    <p>Platform</p>
                                    <select name="platform" id="platform">
                                        <option value="Github"><span class="github-img"></span>Github</option>
                                        <option value="Twitter"><span class="Twitter-img"></span>Twitter</option>
                                        <option value="LinkedIn"><span class="LinkedIn-img"></span>LinkedIn</option>
                                        <option value="YouTube"><span class="YouTube-img"></span>YouTube</option>
                                        <option value="Facebook"><span class="Facebook-img"></span>Facebook</option>
                                    </select>
                                </div>
                                <div class="input-link">
                                    <p>Enter Link</p>
                                    <input type="url" name="url" id="link-input" placeholder="https://example.com" required>
                                </div>
    `;
    showList.appendChild(newLinkElement);

    let mockupList = document.querySelector(".phone-divs");
    let newDivElement = document.createElement("div");
    newDivElement.classList.add("phone-div-link");
    mockupList.appendChild(newDivElement);
}

function removeFromLocalStorage(index) {
    const storedData = JSON.parse(localStorage.getItem("LinkData"));
    storedData.splice(index, 1);
    localStorage.setItem("LinkData", JSON.stringify(storedData));
}

function removeFromPhoneDisplay(index) {
    let phoneDivList = document.querySelectorAll(".phone-div-link");
    phoneDivList[index].remove();
}

function imageShow(){
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
}