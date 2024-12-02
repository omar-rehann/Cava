let menu = document.querySelector(".toggle i");
let nav = document.querySelector("nav");
let oneimg = document.querySelector(".one")
menu.onclick = function() {
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-x");

    } else {
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-x");

    }

}
window.onscroll = function() {
        // console.log(this.scrollY)
        if (this.scrollY >= 700) {
            span.classList.toggle("active");
        }
    }
    //start branch one
function change(ele) {
    oneimg.src = ele;
}


// end branch one