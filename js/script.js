const dark = document.querySelector('.dark');
const light = document.getElementsByTagName('nav');
const cont = document.querySelector('.content');
dark.addEventListener('click', (event) => {
    alert("hello");

    cont.classList.add('.dog');
})
const selectTag = document.querySelector('#version');
selectTag.addEventListener('change', function() {
  const selectedOption = selectTag.options[selectTag.selectedIndex];
  const redirectUrl = selectedOption.value;

  window.location.href = redirectUrl;
});
