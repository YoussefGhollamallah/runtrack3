let footer = document.getElementById("footer");


function scrolling() {
    document.addEventListener("scroll", () => {
        if (window.scrollY < 700) {
            footer.style.backgroundColor = "#333";
            footer.style.color = "#fff";
        } else if ( window.scrollY >= 700 && window.scrollY < 1500) {
            footer.style.backgroundColor = "red";
        } else if ( window.scrollY >= 1500 && window.scrollY < 2200) {
            footer.style.backgroundColor = "green";
        } else if ( window.scrollY >= 2200 && window.scrollY < 3000) {
            footer.style.backgroundColor = "purple";
        } else if ( window.scrollY >= 3000 && window.scrollY < 3700) {
            footer.style.backgroundColor = "orange";
        } else {
            footer.style.backgroundColor = "blue";
        }});
}

scrolling();