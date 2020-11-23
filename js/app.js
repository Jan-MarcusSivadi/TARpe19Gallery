/*Event Targeting*/

/*Set up variables*/
const mainImage = document.querySelector('#main');
var theParent = document.querySelector('.gallery');
const img = document.querySelector('#p1 #p2 #p3 #p4');


theParent.addEventListener('click', (event)=>{
    var target = event.target;

    mainImage.src = target.src;
    
    console.log(theParent);
    target.style.opacity = 0.5;

    console.log('Hello from button click! ' + event.target.src);
});