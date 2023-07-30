// Add your code here
async function submitData(name , email){

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
   try {
        const res = await fetch('http://localhost:3000/users', myRequest);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("there's an error", error)
    }
}