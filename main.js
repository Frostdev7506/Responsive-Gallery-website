let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click',function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"))
})

