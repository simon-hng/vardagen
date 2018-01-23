var menu__items = document.querySelectorAll(".menu__item");

menu__items.forEach(function (item, index){
    item.addEventListener('click', function(a) {
        a.preventDefault();

        //gets href of target
        var target = item.getAttribute("href");

        //scrolling
        document.querySelector(target).scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        //hides menu on mobile
        document.querySelector('.menu-checkbox').checked = false;
    })
})