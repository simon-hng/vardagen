var menu__link = document.querySelectorAll(".menu__item");
var header = document.querySelector(".header");

menu__link.forEach(function (item, index){
    item.addEventListener('click', function(a) {
        a.preventDefault();
        
        //gets headerheight
        var headerHeight = header.offsetHeight;
        console.log(headerHeight);

        //gets targets Y-position and
        var target = item.getAttribute("href");
        var targetOffset = document.querySelector(target).getBoundingClientRect();
        var targetY = targetOffset.top;
        console.log(targetY);

        //scroll
        window.scrollBy({
            top: targetY - headerHeight,
            behavior: 'smooth',
        });

        //hides menu on mobile
        document.querySelector('.menu-checkbox').checked = false;
    })
})