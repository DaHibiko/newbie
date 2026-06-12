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
