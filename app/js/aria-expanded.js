
const toggler = document.querySelectorAll('.js-aria-expanded-toggle');
const el = document.querySelectorAll('[aria-expanded]');


el.forEach(function(item){
    item.setAttribute('aria-expanded', 'false');
});

toggler.forEach(function(item, index){
    item.addEventListener('click', () => {
        if(el[index].getAttribute('aria-expanded') === 'false'){
            el[index].setAttribute('aria-expanded', true);
        } else {
            el[index].setAttribute('aria-expanded', false);
        }
    })
});