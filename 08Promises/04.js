//run and check the code.
const git_api="https://api.github.com/users/prathvihan108"

const res=fetch(git_api)
.then((response)=>{
    return response.json(); //json string to json object;

})
.then((data)=>{
    // data.name="new name"; //u can change the data.
    console.log(data.name) //data holds json object.

})
.catch((error)=>{
    console.log(error);
});

console.log(res);//will print promise <pending>  because js never waits for the promise to be settled
