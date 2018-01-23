const eventItems = document.querySelectorAll(".js-event-item");
const timelineItems = document.querySelectorAll(".js-timeline-content");

const isSelected = "is-selected";
const isVisible = "is-shown";

function toggleClass(elements, index, className) {
   elements.forEach((element) => {
      element.classList.remove(className);
   });
   elements[index].classList.add(className);
}

eventItems.forEach((eventItem, index) => {
   eventItem.addEventListener('click', () => {
      toggleClass(eventItems, index, isSelected);
      toggleClass(timelineItems, index, isVisible);
   });
});