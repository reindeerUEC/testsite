const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener("click", () => {
    alert("痛っ! つつかないで!");
});

const myImage = document.querySelector("img");
let myButton = document.querySelector("button");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefoxImg.png") {
        myImage.setAttribute("src", "images/firefox.jpg");
    } else {
        myImage.setAttribute("src", "images/firefoxImg.png");
    }
};



function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    localStorage.setItem("name", myName);
    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
    }
}

myButton.onclick = () => {
    setUserName();
};
