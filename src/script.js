let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
function active(){
    overlay.classList.add("active-overlay");
    modal.classList.add("active");
}
function deactive(){
    overlay.classList.remove("active-overlay");
    modal.classList.remove("active");
}