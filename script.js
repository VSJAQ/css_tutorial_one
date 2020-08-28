menu.onclick = function menuFunction () {
    let a = document.querySelector('#myTopnav');
    if (a.className === "topnav") {
        a.className += " responsive";
    }
}