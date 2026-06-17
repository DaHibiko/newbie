let gold = 1000
let items = [
    { name: "剣", price: 500, stock:1 },
    { name: "盾", price: 300, stock:3 },
    { name: "薬草", price: 50,},
]

function showItems(){
let html = "";

    for (let i = 0; i < items.length; i++) {
        html += items[i].name + " ";
        html += items[i].price + "G ";

        if (items[i].stock <= 0) {
            html += "売り切れ";
        }
        else {
            html += "在庫: " + items[i].stock + " ";
            html += '<button onclick="buyItem(' + i + ')">購入</button>';
        }

        html += "<br>";
    }

    document.getElementById("shop").innerHTML = html;
}

function buyItem(index){
    if (items[index].stock <= 0) {
    document.getElementById("message").textContent = 
        "在庫がありません"
    }
    else if (gold < items[index].price) {
        document.getElementById("message").textContent =
        "お金が足りません"
    }
    else {
        gold = gold - items[index].price;
        items[index].stock = items[index].stock - 1;

        document.getElementById("message").textContent =
        items[index].name + "を購入しました";

    showItems();
    }
}

showItems();