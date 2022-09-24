const dark = document.querySelector('.dark');
const light = document.getElementsByTagName('nav');
const cont = document.querySelector('.content');
dark.addEventListener('click', (event) => {
    alert("hello");

    cont.classList.add('.dog');
})