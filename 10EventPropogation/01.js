
// Event Bubbling (Default Phase)capture:false
//adEventListner takes 3 parameters ,event,callback,capture

// Event Bubbling and Capturing in JavaScript
// Event Bubbling:

//     Events propagate from the target element upwards through its ancestors (parent, grandparent, etc.).
//     Bubbling is the default phase unless explicitly specified otherwise.

// Event Capturing:capture:true

//     Events propagate from the root element down to the target element.
//     Also known as the capture phase.
// what ever the events are left over to propogate after the completion of the capture phase(those witht the capture false)
//are are prophogated in the bubbling phase.
//we can even stop the event prophogation at any time using the given method.

document.getElementById('child').addEventListener('click', (e) => {
  console.log('Child (Bubbling)');
});//by defalut capture value is false
document.getElementById('parent').addEventListener('click', (e) => {
  console.log('Parent (Bubbling)');
});
document.getElementById('grandparent').addEventListener('click', (e) => {
  console.log('Grandparent (Bubbling)');
});


// // Event Capturing
// document.getElementById('child').addEventListener(
//   'click',
//   (e) => {
//     console.log('Child (Capturing)');
//   },
//   true // Use capture phase
// );
// document.getElementById('parent').addEventListener(
//   'click',
//   (e) => {
//     console.log('Parent (Capturing)');
//   },
//   true // Use capture phase
// );
// document.getElementById('grandparent').addEventListener(
//   'click',
//   (e) => {
//     console.log('Grandparent (Capturing)');
//   },
//   true // Use capture phase
// );

// // Stop Propagation Example
// document.getElementById('child').addEventListener('click', (e) => {
//   e.stopPropagation(); // Stops further event propagation either bubbling or capturing
//   console.log('Child (Propagation Stopped)');
// });
