// Add your code here
function submitData(name , email){

    let myRequest={
        method:"POST",
        header:{
            "Content-Type":"application/json",
            Accept:"applicaation/json",
        },
        body:JSON.stringify({
            name:"mitchel",
            email:"learnwithm@gamil.com",
        })
    }
   return fetch('http://localhost:3000/users', myRequest)
    .then(res=> res.json())
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.error("there's an error",error);
    }
    
    )

}
