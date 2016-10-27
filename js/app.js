var navBtn  = document.querySelector('#btn_menu')
var siteCache  = document.querySelector('.site-cache')
var userBtn  = document.querySelector('#btn_user')


navBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(document.querySelector('body'));
    document.querySelector('body').classList.toggle('with--sidebar--left');
    document.querySelector('body').classList.remove('with--sidebar--right');

});

siteCache.addEventListener("click", function(e){
    e.preventDefault();
    console.log(document.querySelector('body'));
    document.querySelector('body').classList.remove('with--sidebar--left');
    document.querySelector('body').classList.remove('with--sidebar--right');
});




userBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(document.querySelector('body'));
    document.querySelector('body').classList.toggle('with--sidebar--right');
    document.querySelector('body').classList.remove('with--sidebar--left');
});

