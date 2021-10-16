
console.dir(document);
console.log(document.URL);
console.log(document.forms);
console.log(document.links);
console.log(document.doctype);
console.log(document.head);



// //GET ELEMENT BY ID//

// console.log(document.getElementById('namaste'));
//  var headerTitle = document.getElementById('namaste');

//  console.log(namaste);
// namaste.textContent = 'HELLO HYDERABAD :) ';
// namaste.innerText = 'Hello';
// console.log(namaste.innerText);
// namaste.innerHTML = '<h3>Hello Hyderabad :)</h3>';
// namaste.style.borderBottom = 'solid 3px black';


// //GET ELEMENT BY Class//

// var items = document.getElementsByClassName('btn btn-outline-secondary');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello World';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';


// //EVENTS //
 var button = document.getElementById('bull').addEventListener('click', buttonClick);

   function buttonClick(e){
  console.log('Button clicked');
  document.getElementById('namaste').textContent = 'Changed';

     console.log(e);
     console.log(e.target);
     console.log(e.target.id);
     console.log(e.target.className);
    
     
   console.log(e.type);

    // from whole windows
    console.log(e.clientX);
     console.log(e.clientY);
    
    // from actual element itself
     console.log(e.offsetX);
     console.log(e.offsetY);

    console.log(e.altKey);
     console.log(e.ctrlKey);
    console.log(e.shiftKey);
   }


var button = document.getElementById('bull');
var box3 = document.getElementById('box');

button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent); 

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);

    
     document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
     output.innerHTML ='<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
     
}

