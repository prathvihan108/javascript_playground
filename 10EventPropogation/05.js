     // Select all inputs with the 'data-uppercase' attribute
     //data-uppercase is a custom behaiour we can add this behaviour to any element inside the parent which has has the event listner attached to it like form here.
  document.querySelector('#form').addEventListener('input',(e)=>{
    console.log(e.target.dataset);
    if(e.target.dataset.uppercase!=undefined){
        e.target.value=e.target.value.toUpperCase();
    }
  })