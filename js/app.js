var navBtn  = document.querySelector('#header__language')
navBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(document.querySelector('body'));
    document.querySelector('body').classList.toggle('with--sidebar');
});
