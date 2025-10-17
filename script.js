alert("Hello World")
console.log("Hello World");


document.write(`
    <h1>Hello World</h1>
    <p>fun</p>
    <ul>
        <li>item1</li>
        <li>item2</li>
    </ul>
`);

window.alert("嗨嗨，歡迎你的到來!");

let isSure = window.confirm("你確定要刪除嗎?");
document.write(isSure);

setTimeout(() => {
    alert("3秒後出現這段話!");
},3000);

document.getElementById("myTitle");

document.write("原本的標題:"+document.title);
document.title = "更改title";

document.write(`
    <p id="myText">哈囉，我是原始文字</p>
`)

setTimeout(() => {
    let el = document.getElementById("myText");
    el.innerText = "已被 JavaScript 修改～";
}, 3000);

document.write(`
    <p class="intro">第一段</p>
    <p class="intro">第二段</p>
`)

let p = document.querySelector(".intro");
p.style.color = "red"; 

document.write(`
    <p class="intro">第一段</p>
    <p class="intro">第二段</p>
`)

let allP = document.querySelectorAll(".intro"); 
allP.forEach(p => {
    p.style.fontWeight = "bold"; 
});

let newDiv = document.createElement("div"); // 使用 createElement 來建立元素
newDiv.innerText = "Block";
newDiv.style.backgroundColor = "red";
newDiv.style.width = "100px";
newDiv.style.height = "100px";
document.body.appendChild(newDiv); 
  