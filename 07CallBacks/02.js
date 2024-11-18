//problem with the callbacks.
//2.invertion of control
//Inversion of Control (IoC) is a programming principle where the control of program execution is inverted from the usual procedural flow. When applied to callbacks, it refers to the fact that the responsibility for executing the callback is handed over to another function or framework.
//this can be risky since we can not trust the apis a and frame works


function doSomethingAsync(callback) {
    setTimeout(() => {
      console.log('Doing something asynchronously...');
      callback();  // The control to execute the callback is with this function
    }, 1000);
  }
  
  doSomethingAsync(() => {
    console.log('Callback executed after async task');
  });
  