function nibunnhou(){
	const jsx = JXG.JSXGraph.initBoard("jxgbox", 
		{axis: true, boundingbox: [-1, 5, 6, -5]});
	//const a = Number(document.getElementById("first1"));
	//const b = Number(document.getElementById("first2"));
	// 点を表示する
	jsx.create("point", [2, 0], {size:2, color:"orange"});
	jsx.create("point", [3, 0], {size:2, color:"orange"});
	// 二次関数
	jsx.create("functiongraph", [x=>x**2-5], {strokeColor:"purple"});

	let a = 2; //a
    let b = 3; //b
    let EPS = 1e-7; //許容誤差
    let output = "2分法:\n";

    for (let i = 0; i < 100; i++) {
        let c = (a + b) / 2;
        output += `i=${i}, a=${a.toFixed(7)}, b=${b.toFixed(7)}, 中点c=${c.toFixed(7)}, f(c)=${f(c).toFixed(7)}\n`;
        if (Math.abs(f(c)) < EPS) { //Math.absは絶対値を返す。許容誤差以内だったら
            output += `完了しました: c = ${c.toFixed(7)}\n`;
            document.getElementById('output1').textContent = output;
            return;
        }
        if (f(a) * f(c) < 0) {
            b = c;
        } else {
            a = c;
        }
    }
	output += "初期値を入力しなおしてください\n"; //100回繰り返しても根が求められなかったら
    document.getElementById('output1').textContent = output;
}

function newtonhou(){
	//const d = Number(document.getElementById("first3"));
	const jsx2 = JXG.JSXGraph.initBoard("jxgbox2",
		{axis: true, boundingbox: [-1, 5, 6, -5]});
	jsx2.create("functiongraph", [x=>x**2-5], {strokeColor:"purple"});
	jsx2.create("functiongraph", [x=>6*x-14], {strokeColor:"green"});
	jsx2.create("point", [3, 4], {size:2, color:"orange"});

	let d = 2; //d
    let EPS = 1e-7; //許容誤差
    let output = "ニュートン法:\n";

    for (let i = 0; i < 100; i++) {
        let fx = f(d);
        let dfx = df(d);
        output += `i=${i}, d=${d.toFixed(7)}, f(d)=${fx.toFixed(7)}, f'(d)=${dfx.toFixed(7)}\n`;
        if (Math.abs(fx) < EPS) { //Math.absは絶対値を返す。許容誤差以内だったら
            output += `完了しました: d = ${d.toFixed(7)}\n`;
            document.getElementById('output2').textContent = output;
            return;
        }
        d = d - fx / dfx;
    }
    output += "初期値を入力しなおしてください\n"; //100回繰り返しても根が求められなかったら
    document.getElementById('output2').textContent = output;
}

function f(x) {
    return x**2-5
}

function df(x) {
    return 2*x
}