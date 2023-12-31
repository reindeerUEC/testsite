const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
let myVariable;
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myVariable = "Bob";
document.querySelector("html").addEventListener("click", function () {
    alert("痛っ! つつかないで!");
});
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefoxImg2.png") {
        myImage.setAttribute("src", "images/firefoxImg.png");
    } else {
        myImage.setAttribute("src", "images/firefox.jpg");
    }
};

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla はかっこいいよ、${myName} さん、Mozilla はかっこいいよ。`;
}
