let select = document.getElementById("select");
let textarea = document.getElementById("textarea");
let result = document.getElementById("result");

textarea.addEventListener("input",(eo) => {
    if (select.value == "decode") {
        result.innerHTML = textarea.value;
    } else if (select.value == "encode") {
        result.innerHTML = btoa(textarea.value);
    }
    
})
select.addEventListener("change",(eo) => {
    if (select.value == "decode") {
        result.innerHTML = textarea.value;
    } else if (select.value == "encode") {
        result.innerHTML = btoa(textarea.value);
    }
    
    
})
let app = document.getElementById("app");
let cross = document.getElementById("cross");
let btn = document.getElementById("btn");
setTimeout(() => {
    app.style.display ="flex";
    cross.addEventListener("click",(eo) => {
        app.style.display ="none";
    })
    btn.addEventListener("click",(eo) => {
        window.open("https://play.google.com/store/apps/details?id=com.area120.grasshopper&hl=fr&gl=US");
    })

}, 4000);
