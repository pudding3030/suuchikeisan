// Window
window.addEventListener("load", (event)=>{
	// JSXGraph
	const jsx = JXG.JSXGraph.initBoard("jxgbox", 
		{axis: true, boundingbox: [-1, 5, 6, -5]});
    // 点を表示する
	jsx.create("point", [1, 0], {size:2, color:"orange"});
    // 二次関数
	jsx.create("functiongraph", [x=>x**2-4], {strokeColor:"purple"});
});