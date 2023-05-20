const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.getElementById("btn");
let passEl1 = document.getElementById("pass-el-1");
let passEl2 = document.getElementById("pass-el-2");

// let passLen = 15

function getRandChar() {
        let randChar = Math.floor(Math.random() * characters.length)
        return characters[randChar]
}

function getRandPass() {
    let randPass = ""
    for (let i = 0; i < 15; i++) {
        randPass += getRandChar()
    } 
    return randPass;
}

const getPass1 = getRandPass()
const getPass2 = getRandPass()

btn.addEventListener("click", function() {
    passEl1.textContent = getPass1
    passEl2.textContent = getPass2
})

console.log(getPass1)
console.log(getPass2)
