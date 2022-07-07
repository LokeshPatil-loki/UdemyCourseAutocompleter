let courseSections = document.getElementsByClassName("udlite-btn udlite-btn-large udlite-btn-link udlite-heading-md udlite-accordion-panel-toggler panel--panel-toggler--30J_B panel--outer-panel-toggler--3I6w6");
courseSections = Array.from(courseSections);

courseSections.forEach(e => {
    e.click();
});

let checkboxes = document.getElementsByClassName("udlite-sr-only udlite-real-toggle-input");
checkboxes = Array.from(checkboxes);

checkboxes.forEach((e,i) => {
    setTimeout(()=>{
        if(!e.checked){
            e.click();
        }
    },i*1000);
});
