//imports always go at the top of the file
//this is called an IIFE (immediately invoked function expression)
import { getData } from "./modules/dataMiner.js";
//it's a pretty common 
(() => {
    console.log('fired!');
    let theThings = document.querySelector("#team-section"),
        theTemplate = document.querySelector("#bio-template").content,
        faveData;

    function buildThings(data) {
        //get all the keys (names) from the data object and use that to iterate through the data
        debugger;

        faveData = data;
        
        const things = Object.keys(data); //Object.keys creates an array

        things.forEach(thing => {
            let panel = theTemplate.cloneNode(true);
            let containers = panel.firstElementChild.children;

            containers[0].querySelector("img").src = `images/${data[thing].avatar}`;
            containers[0].querySelector("img").id = thing;
            containers[0].querySelector("img").addEventListener('click', showThing);
            containers[1].textContent = data[thing].name;
            
            
            theThings.appendChild(panel);
        })

    }

   function showThing() {
        debugger;

        let currentThing = faveData[this.id];
        
   }
    

    getData(`./data.json`, buildThings);
})();