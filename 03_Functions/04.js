// Function to create buttons and attach event listeners using closures 
//take the use of the closures to attach the even listners.
//avoid using the global variables ,since they can be modified by anyone.

function createButtons(){
    const container = document.getElementById("buttonContainer")
    for(let i=1;i<=5;i++){
        const newBtn = document.createElement("button");
        newBtn.textContent = `Button ${i}`;
        newBtn.addEventListener("click",function(){
            console.log(`Button ${i} clicked`);
            alert(`Button ${i} clicked`);
        });

        container.appendChild(newBtn);
    }
}

createButtons();