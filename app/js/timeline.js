var event__item = document.querySelectorAll(".event__item");
var timeline__item = document.querySelectorAll(".timeline__text");
var select = "event__item--selected";
var hide = "visually-hidden";


//deselect all items
var deselect = function(){
    event__item.forEach(function (item){
        item.classList.remove(select);
    })
    timeline__item.forEach(function (item){
        item.classList.add(hide);
    })
}

//Start with event__00 and text__00
deselect();
event__item[0].classList.add(select);
timeline__item[0].classList.remove(hide);

//toggles classes on click
event__item.forEach(function (item, index){
    item.addEventListener('click', function(){
        deselect();
        item.classList.add(select);
        timeline__item[index].classList.remove(hide);
    })
})


/* //timeline events
var event__item = document.getElementsByClassName("event__item");

var item__0 = event__item.item(0);
var item__1 = event__item.item(1);
var item__2 = event__item.item(2);
var item__3 = event__item.item(3);

//timeline text
var timeline = document.getElementsByClassName("timeline__text");
var text__0 = timeline.item(0);
var text__1 = timeline.item(1);
var text__2 = timeline.item(2);
var text__3 = timeline.item(3);


//deselect all events/timeline-texts
var deselect = function(){
    item__0.classList.remove("event__item--selected");
    item__1.classList.remove("event__item--selected");
    item__2.classList.remove("event__item--selected");
    item__3.classList.remove("event__item--selected");

    text__0.classList.add("visually-hidden");
    text__1.classList.add("visually-hidden");
    text__2.classList.add("visually-hidden");
    text__3.classList.add("visually-hidden");
};

//starts with item__0 selected
deselect();
item__0.classList.add("event__item--selected");
text__0.classList.remove("visually-hidden");

//TODO: repetitive
item__0.onclick = function(){
    deselect();
    item__0.classList.add("event__item--selected");
    text__0.classList.remove("visually-hidden");
};

item__1.onclick = function(){
    deselect();
    item__1.classList.add("event__item--selected");
    text__1.classList.remove("visually-hidden");
};
item__2.onclick = function(){
    deselect();
    item__2.classList.add("event__item--selected");
    text__2.classList.remove("visually-hidden");
};
item__3.onclick = function(){
    deselect();
    item__3.classList.add("event__item--selected");
    text__3.classList.remove("visually-hidden");
};



var event_item = document.getElementsByClassName("event__item");
var timeline = document.getElementsByClassName("timeline__text");
var item_count = event_item.length;
var n = 0;


//reset
while(n < item_count){
    text = timeline.item(n);
    text.classList.add("visually-hidden");
    n = n + 1;
}; */ 