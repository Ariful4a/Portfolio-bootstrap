
var type = new Typed(".multiple_text", {
    strings: ["Frontend Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    typeDaly: 1000,
    loop: true
})

window.onscroll = () => {

    let header = document.querySelector('header');

    header.classList.toggle('ariful', window.scrollY > 100);
}

