let name = "Hibiki";
let age = "23";
age = "24";
const country = "Japan"; /*letとconstの違いは変数を変更できるかどうか*/

console.log(name+age+"歳");
console.log(country);

console.log(10 + 5);
console.log("10" + 5);

let gold = 500;
console.log("所持金: " + gold + "G");

function earned() {
        console.log("u got "+ gold + "G");
}
earned();
earned();
earned();

function hello(){
console.log("こんにちは！");
}

function changetitle() {    
    document.getElementById("title").textContent =
    "Javascript damnn";
}

function LevelUP() {
    document.getElementById("Level").textContent =
    "レベル2"
}

function earngold() {
    gold = gold + 100;
    document.getElementById("Gold").textContent =
    gold + "G";
}