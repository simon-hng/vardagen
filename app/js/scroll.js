const menuLink = document.querySelectorAll(".js-menu-item");
const menuToggle = document.querySelector(".js-menu-toggle");
const menu = document.querySelector(".js-menu");
const header = document.querySelector(".js-header");
const menuCheckbox = document.querySelector('.js-menu-checkbox');

menuLink.forEach(function (item, index){
    item.addEventListener('click', function(event) {
        event.preventDefault();
        
        let headerHeight = header.offsetHeight; 
        let target = item.getAttribute("href");
        let targetOffset = document.querySelector(target).getBoundingClientRect();
        let targetYPosition = targetOffset.top;
        
        window.scrollBy({
            top: targetYPosition - headerHeight,
            behavior: 'smooth',
        });

        // hides menu on mobile only for checkbox hack
        menuCheckbox.checked = false;
    });
});