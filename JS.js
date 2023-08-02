const btn = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");
btn.addEventListener("click", ()=>{
    const red = Math.trunc(Math.random() * 256);
    const green = Math.trunc(Math.random() * 256);
    const blue = Math.trunc(Math.random() * 256);
    console.log(red,green,blue);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    currentColor.textContent = `${red}, ${green}, ${blue}`;
});