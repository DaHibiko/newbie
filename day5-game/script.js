let gold = 0;
let hasSword = false;

        function earnGold() {
            gold = gold + 100;
            document.getElementById("gold").textContent =
            gold + "G";
        }

        function buySword() {
            if (hasSword == true){
            alert ("もう既に持っています");
            }
            else if (gold >= 500){
                gold = gold - 500;
                document.getElementById("gold").textContent = 
                gold + "G";
                hasSword = true;

            alert ("剣が買えました!");
            } else {
            alert ("お金が足りません");
            }
        } 
/* 同じ関数は複数作れない、作った場合あとの関数が優先される */ 
/* getElementById() はHTMLのidを探す。
goldだと変数を探していることになるので、"gold" と書いて id="gold" を探す */
/* gold → 変数 
"gold" → HTMLのid */
/* if
↓
最初の質問

else if
↓
最初がダメだったら次の質問

else
↓
全部ダメだったら最後の処理 */

        let items = [
            "剣",
            "盾",
            "薬草"
        ];
        let prices = [
            500,
            300,
            50
        ];
        function buyItem(index){
            if (gold>= prices[index]){
            
            gold = gold - prices[index];
            document.getElementById("gold").textContent =
            gold + "G";

            alert(items[index] + "を買いました");
            
        } else {
            alert("お金が足りませんでした")
        }
    }
        console.log("エラー確認用") 
        /*今やってる範囲だとhasSwordが腐って使えない*/