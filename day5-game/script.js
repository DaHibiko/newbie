let gold = 1000
let items = [
    { name: "剣", price: 500 },
    { name: "盾", price: 300 },
    { name: "薬草", price: 50 },
]
function buyItem(index) {

    if (gold >= items[index].price) {

        gold = gold - items[index].price;

        document.getElementById("gold").textContent =
        "所持金 " + gold + "G";

        document.getElementById("message").textContent =
        items[index].name + "を購入しました";
    }
}

let html = "";
for (let i = 0; i < items.length; i++){
    html += items[i].name + " " + items[i].price + "G" + "<br>";
}

document.getElementById("shop").innerHTML = html;
/* html += `${items[i].name} ${items[i].price}G<br>`; 実務はこっちらしい、今の学習内容では↑で精一杯。 */