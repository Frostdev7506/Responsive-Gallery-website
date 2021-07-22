let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener("click", function () {
    collapse.forEach((col) => col.classList.toggle("collapse-toggle"));
});

// if (document.getElementById("dark").classList.contains("far fa-lightbulb ")) {
//     document.getElementById("dark").className = " fas fa-moon";
// }



// function which cycyles between dark and light mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-theme");
    // document.getElementById("dark").className = " far fa-lightbulb ";
    if (element.classList.contains("dark-theme")) {
        document.getElementById("dark").className = " far fa-lightbulb ";
    } else {
        document.getElementById("dark").className = " fas fa-moon ";
    }
}