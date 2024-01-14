function ClickLeft0() {
    let container = document.querySelector('#scroll-0');
    container.scrollTo({
        left:container.scrollLeft - 650,
        top: 0,
        behavior: "smooth"
    });
}

function ClickRight0() {
    let container = document.querySelector('#scroll-0');
    container.scrollTo({
        left:container.scrollLeft + 650,
        top: 0,
        behavior: "smooth"
    });
}